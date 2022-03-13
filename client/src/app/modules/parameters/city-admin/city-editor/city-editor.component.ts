import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.css']
})
export class CityEditorComponent implements OnInit {

  code: String
  fgValidation: FormGroup;
  depID: String


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, http: HttpClient, private serCity: CityService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      code: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]]
    });
  }

  ngOnInit() {
    this.getCode();
    this.fgValidationBuilder();
    this.getCityInfo();
  }

  getCityInfo() {
    let dep = this.serCity.searchCity(this.code).subscribe(data => {
      if (data != null) {
        this.fg.code.setValue(data.code);
        this.fg.name.setValue(data.name);
        this.depID=data._departmentId;

      }
    });

  }

  getCode() {
    this.code = this.route.snapshot.paramMap.get("id");
  }

  cityUpdate() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let c = this.fg.code.value;

      this.serCity.updateCity(n, c, this.code,this.depID).subscribe(data => {
        if (data != null) {
          this.router.navigate(['/city/city-list'])
        }
      })
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }

}
