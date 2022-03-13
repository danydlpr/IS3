import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-department-creator',
  templateUrl: './department-creator.component.html',
  styleUrls: ['./department-creator.component.css']
})


export class DepartmentCreatorComponent implements OnInit {
  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, http: HttpClient, private serDepartment: DepartmentService) { }


  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      code: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]]
    });
  }
  ngOnInit() {
    this.fgValidationBuilder();
  }

  departmentCreate() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let c = this.fg.code.value;

      this.serDepartment.createDepartment(n,c).subscribe(data => {
        if (data != null) {
          this.router.navigate(['/department/department-list'])
        }
      })
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }
}
