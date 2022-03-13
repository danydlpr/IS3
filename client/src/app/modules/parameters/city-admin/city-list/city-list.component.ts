import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/cityModel.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cityList: CityModel[] = [];
  constructor(private serCity: CityService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments = () => {
    this.serCity.loadAllCities().subscribe(data => {
      this.cityList = data;
    });
  }
}
