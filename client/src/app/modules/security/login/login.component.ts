import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';


declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  fgValidation: FormGroup;
  captchaResponse: String;

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA')
  }

  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      myRecaptcha: ['',[]]
    });
  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  loginEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");

    } else {
      let u = this.fg.username.value;
      let p = this.fg.password.value;

      this.secService.loginUser(u, p).subscribe(data => {
        
        if (data != null) {
          try {
            
          this.secService.saveLoginInfo(data.user);
          this.router.navigate(['/home'])
          } catch (error) {
            alert("Sus credenciales de acceso son incorrectas, por favor intente de nuevo!")
          }
        }else{
          alert("nelson")
        }
      });

    }
  }

  
  verifyRecaptcha() {
    return this.captchaResponse != null;
  }

  public beforeSubmittingForm(response: String) {
    this.captchaResponse = response;
  }



  get fg() {
    return this.fgValidation.controls;
  }
}
