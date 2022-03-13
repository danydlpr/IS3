import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TypeModel } from 'src/app/models/typeModel.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PropertyTypeService } from 'src/app/services/property-type.service';

@Component({
  selector: 'app-type-creator',
  templateUrl: './type-creator.component.html',
  styleUrls: ['./type-creator.component.css']
})
export class TypeCreatorComponent implements OnInit {

  fgValidation: FormGroup;
  typeList: TypeModel[] = [];
  subscription: Subscription;

  constructor(private fb: FormBuilder, private router: Router, private serType: PropertyTypeService) { }


  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }
  ngOnInit() {
    this.fgValidationBuilder();
    
  }

  typeCreate() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;


      this.serType.createType(n).subscribe(data => {
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
