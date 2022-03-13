import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-adviser-list',
  templateUrl: './adviser-list.component.html',
  styleUrls: ['./adviser-list.component.css']
})
export class AdviserListComponent implements OnInit {

  adviserList: UserModel[] = [];
  constructor(private serSec: SecurityService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments = () => {
    this.serSec.loadAdvisers().subscribe(data => {
      this.adviserList = data;
    });
  }
}
