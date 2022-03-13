import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { CityModel } from 'src/app/models/cityModel.model';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyModel } from 'src/app/models/property.model';

declare var initMaterializeSelect: any;

@Component({
  selector: 'app-property-editor',
  templateUrl: './property-editor.component.html',
  styleUrls: ['./property-editor.component.css']
})
export class PropertyEditorComponent implements OnInit {

  departmentList: DepartmentModel[];
  cityList: CityModel[];
  userInfo: UserModel;
  depInfo: DepartmentModel;
  subscription: Subscription;
  fgValidation: FormGroup;
  code: String;
  propertyInfo: PropertyModel;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private secService: SecurityService, private router: Router,
    private serDepartment: DepartmentService, private serProperty: PropertyService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      price: ['', [Validators.required]],
      photography: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      tipo2: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description:['',[Validators.required]]
    });
  }


  ngOnInit() {
    this.fgValidationBuilder();
    this.verifyUserSession();
    this.loadAllDepartments();
    this.getCode();
    this.getPropertyInfo();

  }


  updateEvent() {
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
      let des= this.fg.description.value;


      this.subscription = this.serProperty.searchProperty(dep).subscribe(data => {

        this.propertyInfo = data;
        setTimeout(() => {
          this.serProperty.updateProperty(a, p, ph, tp, tp2, cs, this.depInfo.name, c, this.code, des).subscribe(data => {

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

  getPropertyInfo() {
    let dep = this.serProperty.searchProperty(this.code).subscribe(data => {
      if (data != null) {
        this.fg.address.setValue(data.address);
        this.fg.price.setValue(data.price);
        this.fg.photography.setValue(data.photography);
        this.fg.tipo.setValue(data.type);
        this.fg.tipo2.setValue(data.offerType);
        this.fg.department.setValue(data.department);
        this.fg.city.setValue(data.city);
        this.fg.description.setValue(data.description);

      }
    });

  }

  getCode() {
    this.code = this.route.snapshot.paramMap.get("id");
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
