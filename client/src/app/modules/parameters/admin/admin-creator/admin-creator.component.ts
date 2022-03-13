import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { PropertyTypeService } from 'src/app/services/property-type.service';

declare var openPlatformModalMessage: any;
@Component({
  selector: 'app-admin-creator',
  templateUrl: './admin-creator.component.html',
  styleUrls: ['./admin-creator.component.css']
})
export class AdminCreatorComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService
    , private router: Router, private serType: PropertyTypeService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  registryEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let p = this.fg.password.value;
      let ln = this.fg.last_name.value;
      let e = this.fg.email.value;
      let ph = this.fg.phone.value;


      this.secService.registryAdmin({ n, p, ln, e, ph }).subscribe(data => {

        if (data != null) {
          
          this.secService.saveLoginInfo(data);
          this.serType.sendEmailAdviser(data, p).subscribe(data => {
            if (data != null) {
              this.router.navigate(['/home'])
              
            }
          });
         
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
