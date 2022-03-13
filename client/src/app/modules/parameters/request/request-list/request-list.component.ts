import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/requestModel.model';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { PropertyService } from 'src/app/services/property.service';
import { Alert } from 'selenium-webdriver';
declare var openConfirmationModal: any;

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestModel: RequestModel;
  requestList: RequestModel[];
  codeToRemove: String;
  subscription: Subscription;
  userInfo: UserModel;
  constructor(private serProperty: PropertyService, private serRequest: RequestService, private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
    this.loadMyRequest();
  }


  loadMyRequest = () => {
    this.serRequest.loadMyRequest(this.userInfo.email).subscribe(data => {
      this.requestList = data;
      this.requestList.forEach(element => {
        this.serProperty.searchProperty(element.property.id).subscribe(data2 =>{
          element.property=data2;
        })
       });
    });
  }
  openConfirmation(code) {
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeRequest(code,property) {
    this.serRequest.deleteRequest(code).subscribe(data2 => {
      this.serProperty.updatePropertyStatusBack(property.id, property).subscribe(data =>{
        if (data!=null) {
          this.loadMyRequest()
        }
        
      });
    });
    
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
    });

  }
}
