import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/requestModel.model';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';
import { TypeModel } from 'src/app/models/typeModel.model';
import { PropertyTypeService } from 'src/app/services/property-type.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { DepartmentService } from 'src/app/services/department.service';
import { CityModel } from 'src/app/models/cityModel.model';
import { CityService } from 'src/app/services/city.service';
declare var initMaterializeSelect: any;
declare var openConfirmationModal: any;
@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.css']
})
export class AdminRequestListComponent implements OnInit {

  requestModel: RequestModel;
  requestList: RequestModel[];
  departmentList: DepartmentModel[];
  cityList: CityModel[];
  typeList: TypeModel[];
  codeToRemove: String;
  subscription: Subscription;
  userInfo: UserModel;
  filterType = "";
  filterOT = "";
  filterDep = "";
  filterCity = "";
  constructor(private serRequest: RequestService,private serDepartment: DepartmentService, private secService: SecurityService, private serType: PropertyTypeService, private serCity:CityService) { }

  ngOnInit() {
    this.verifyUserSession();
    this.loadMyRequest();
    this.loadAllType();
    this.loadAllDepartments();
    this.loadAllCities();
  }


  loadMyRequest = () => {
    this.serRequest.loadAllRequest().subscribe(data => {
      this.requestList = data;
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

  loadAllCities() {
    this.subscription = this.serCity.loadAllCities().subscribe(data => {
      this.cityList = data;
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


  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;


    });

  }

}
