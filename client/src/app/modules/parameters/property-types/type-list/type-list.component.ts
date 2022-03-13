import { Component, OnInit } from '@angular/core';
import { PropertyTypeService } from 'src/app/services/property-type.service';
import { TypeModel } from 'src/app/models/typeModel.model';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  typeList: TypeModel[] = [];

  constructor(private serType:PropertyTypeService) { }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes = () => {
    this.serType.loadAllTypes().subscribe(data => {
      this.typeList = data;
    });
  }
}
