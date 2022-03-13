import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/cityModel.model';
import { TypeModel } from 'src/app/models/typeModel.model';
import { PropertyTypeService } from 'src/app/services/property-type.service';


declare var initMaterializeSelect: any;

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  departmentList: DepartmentModel[];
  cityList: CityModel[];
  typeList: TypeModel[];
  userInfo: UserModel;
  depInfo: DepartmentModel;
  subscription: Subscription;
  fgValidation: FormGroup;


  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router,
    private serDepartment: DepartmentService, private serCity: CityService, private serType: PropertyTypeService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      price: ['', [Validators.required]],
      photography: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      tipo2: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description: ['', [Validators.required]]

    });
  }


  ngOnInit() {
    this.fgValidationBuilder();
    this.verifyUserSession();
    this.loadAllDepartments();
    this.loadAllType();
  }


  registryEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let a = this.fg.address.value;
      let p = this.fg.price.value;
      let tp = this.fg.tipo.value;
      let tp2 = this.fg.tipo2.value;
      let ph = this.fg.photography.value;
      let cs = ` ${this.userInfo.email}`;
      let dep = this.fg.department.value;
      let c = this.fg.city.value;
      let des = this.fg.description.value;

      this.subscription = this.serDepartment.searchDepartment(dep).subscribe(data => {

        this.depInfo = data;
        setTimeout(() => {
          this.secService.registryProperty(a, p, ph, tp, tp2, cs, this.depInfo.name, c, des).subscribe(data => {

            if (data != null) {
              this.router.navigate(['/property/property-list'])
            }
          });
        }, 600);

      });
    }
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;

    });
  }

  loadAllType() {
    this.subscription = this.serType.loadAllTypes().subscribe(data => {
      this.typeList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }



  loadAllDepartments() {
    this.subscription = this.serDepartment.loadAllDepartments().subscribe(data => {
      this.departmentList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }

  loadCitiesOfDepartment() {
    let department = this.fg.department.value;
    this.subscription = this.serDepartment.loadCitiesOfDep(department).subscribe(data => {
      this.cityList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 600);
    })

  }

  get fg() {
    return this.fgValidation.controls;
  }

}
