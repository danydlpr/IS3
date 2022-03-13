import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url: String = "http://localhost:3000/api/Users/"

  userInfo : UserModel;
  userLogged : boolean = false;
  userName : String;

  subscription : Subscription;

  constructor(private secService: SecurityService,private http: HttpClient) { }

  ngOnInit() {

    this.verifyUserSession();


  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;
      this.updateInfo();
      
    });
    
  }

  updateInfo(){
    let msg = "In session: ";
    this.userLogged = this.userInfo.isLogged;
    /**this.userName= this.http.get<UserModel>(`${this.url}`)*/
    this.userName = `${msg} ${this.userInfo.firstName} ${this.userInfo.firstLastName} `;
    

  }

}
