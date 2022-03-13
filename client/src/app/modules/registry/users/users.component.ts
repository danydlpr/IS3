import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SecurityService } from 'src/app/services/security.service';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router, private http: HttpClient) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  /** 
   * Toma la informacion validada del nuevo usuario para pasarsela al servicio y 
   * posteriormente el sistema lo registra y lo logea para luego llevarlo a la pagina home.
   * 
  */
  registryEvent() {
    //Se validan los datos del formulario, si son correctos se asignan a las variables
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let p = this.fg.password.value;
      let ln = this.fg.last_name.value;
      let e = this.fg.email.value;
      let ph = this.fg.phone.value;

      //Se utiliza el servicio de seguridad llamando al metodo registryUser que hace el post con la api de loopback
      //se usa el metodo subscribe para volver el metodo sincrono a uno asincrono 
      this.secService.registryUser(n, p, ln, e, ph).subscribe(data => {
        //se valida que no devolviera ningun error para logearlo y llevarlo al home
        if (data != null) {
          this.router.navigate(['/home'])
          this.secService.saveLoginInfo(data);
        } else {
          openPlatformModalMessage("¡La información no es valida!")
        }
      });
  }
  }

  ngOnInit() {
    this.fgValidationBuilder();
  }
  get fg() {
    return this.fgValidation.controls;
  }

}
