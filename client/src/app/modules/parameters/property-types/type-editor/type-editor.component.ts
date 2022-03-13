import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PropertyTypeService } from 'src/app/services/property-type.service';

@Component({
  selector: 'app-type-editor',
  templateUrl: './type-editor.component.html',
  styleUrls: ['./type-editor.component.css']
})
export class TypeEditorComponent implements OnInit {
  code: String;
  fgValidation: FormGroup;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, http: HttpClient, private serType: PropertyTypeService) { }
  
  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
    this.getCode();
    this.fgValidationBuilder();
    this.getTypeInfo();
  }

  getTypeInfo(){
    this.serType.searchType(this.code).subscribe(data => {
      if (data != null) {
        this.fg.name.setValue(data.name)
        data=null;
      }
    });
   
  }

  getCode() {
    this.code = this.route.snapshot.paramMap.get("id");
  }

  typeUpdate(){
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      

      this.serType.updateType(n,this.code).subscribe(data => {
        if (data != null) {
          this.router.navigate(['/type/type-list'])
        }
      })
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }
}
