import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { PropertyTypeService } from 'src/app/services/property-type.service';

declare var openPlatformModalMessage: any;
@Component({
  selector: 'app-adviser-creator',
  templateUrl: './adviser-creator.component.html',
  styleUrls: ['./adviser-creator.component.css']
})
export class AdviserCreatorComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService,
    private router: Router, private serType: PropertyTypeService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  adviserEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let p = this.fg.password.value;
      let ln = this.fg.last_name.value;
      let e = this.fg.email.value;
      let ph = this.fg.phone.value;


      this.secService.registryAdviser(n, p, ln, e, ph).subscribe(data => {

        if (data != null) {
          this.serType.sendEmailAdviser(data,p).subscribe(data => {
            if (data != null) {
              this.router.navigate(['/adviser/adviser-list'])
            }
          })

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

