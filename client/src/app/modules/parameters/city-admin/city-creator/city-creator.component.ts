import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CityService } from 'src/app/services/city.service';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { Subscription } from 'rxjs';



declare var initMaterializeSelect: any;

@Component({
  selector: 'app-city-creator',
  templateUrl: './city-creator.component.html',
  styleUrls: ['./city-creator.component.css']
})
export class CityCreatorComponent implements OnInit {
  fgValidation: FormGroup;
  departmentList: DepartmentModel[] = [];
  subscription: Subscription;

  constructor(private fb: FormBuilder, private router: Router, http: HttpClient,
    private serCity: CityService, private serDepartment: DepartmentService) { }


  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      code: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]],
      department: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.fgValidationBuilder();
    this.loadAllDepartments();
  }

  cityCreate() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let c = this.fg.code.value;
      let d = this.fg.department.value;

      this.serCity.createCity(n, c, d).subscribe(data => {
        if (data != null) {
          this.router.navigate(['/city/city-list'])
        }
      })
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }





  loadAllDepartments() {
    this.subscription = this.serDepartment.loadAllDepartments().subscribe(data => {
      this.departmentList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }

}
