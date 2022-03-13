import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-editor',
  templateUrl: './department-editor.component.html',
  styleUrls: ['./department-editor.component.css']
})
export class DepartmentEditorComponent implements OnInit {
  code: String
  fgValidation: FormGroup;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, http: HttpClient, private serDepartment: DepartmentService) { }
  
  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      code: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]]
    });
  }

  ngOnInit() {
    this.getCode();
    this.fgValidationBuilder();
    this.getDepartmentInfo();
  }

  getDepartmentInfo(){
    this.serDepartment.searchDepartment(this.code).subscribe(data => {
      if (data != null) {
        this.fg.code.setValue(data.code);
        this.fg.name.setValue(data.name)
        data=null;
      }
    });
   
  }

  getCode() {
    this.code = this.route.snapshot.paramMap.get("id");
  }

  departmentUpdate(){
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let c = this.fg.code.value;
      

      this.serDepartment.updateDepartment(n,c,this.code).subscribe(data => {
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
