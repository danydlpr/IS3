import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { PropertyTypeService } from 'src/app/services/property-type.service';

@Component({
  selector: 'app-contact-form-creator',
  templateUrl: './contact-form-creator.component.html',
  styleUrls: ['./contact-form-creator.component.css']
})
export class ContactFormCreatorComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private serType: PropertyTypeService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      description: ['', [Validators.required]]
    });
  }
  
  registryEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let e = this.fg.email.value;
      let d = this.fg.description.value;


      this.serType.sendMessage(n,  e, d).subscribe(data => {

        if (data != null) {
          alert("Mensaje enviado con éxito!")
          this.router.navigate(['/home'])
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
