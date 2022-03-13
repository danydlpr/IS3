import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-adviser-editor',
  templateUrl: './adviser-editor.component.html',
  styleUrls: ['./adviser-editor.component.css']
})
export class AdviserEditorComponent implements OnInit {
  code: String
  fgValidation: FormGroup;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private serSecurity: SecurityService) { }

  fgValidationBuilder() {

    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });

  }

  ngOnInit() {
    this.getCode();
    this.fgValidationBuilder();
    this.getAdviserInfo();
  }

  getAdviserInfo() {
    this.serSecurity.searchAdviser(this.code).subscribe(data => {
      if (data != null) {
        
        this.fg.name.setValue(data.firstName)
        this.fg.last_name.setValue(data.firstLastName);
        this.fg.email.setValue(data.email);
        this.fg.password.setValue(data.password);
        this.fg.phone.setValue(data.phone);
        data = null;
      }
    });

  }

  getCode() {
    this.code = this.route.snapshot.paramMap.get("id");
  }

  adviserUpdate() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let p = this.fg.password.value;
      let ln = this.fg.last_name.value;
      let e = this.fg.email.value;
      let ph = this.fg.phone.value;


      this.serSecurity.updateAdviser(n, p, ln, e, ph, this.code).subscribe(data => {
        if (data != null) {
          this.router.navigate(['/adviser/adviser-list'])
        }
      })
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }
}
