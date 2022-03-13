import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertyList: PropertyModel[] = [];
  userInfo: UserModel;
  subscription: Subscription;

  constructor(private serProperty: PropertyService, private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
    this.loadMyProperties();
  }

  loadMyProperties() {
    this.serProperty.loadAllMyProperties(this.userInfo.email).subscribe(data => {
      this.propertyList = data;
    });
  }
  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
    });
  }
  aceptRequest(property){
    this.serProperty.aceptProperty(property.id, property).subscribe(data => {
      this.loadMyProperties();
    });
  }
}
