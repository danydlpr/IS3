import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { DepartmentService } from 'src/app/services/department.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departmentList: DepartmentModel[] = [];
  codeToRemove: String;

  constructor(private depService: DepartmentService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments = () => {
    this.depService.loadAllDepartments().subscribe(data => {
      this.departmentList = data;
    });
  }

  
}