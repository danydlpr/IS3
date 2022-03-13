import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CityModel } from '../models/cityModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url: String = "http://localhost:3000/api/cities"
  constructor(private http: HttpClient) { }

  loadAllCities(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`${this.url}`)
  }

  createCity(name: String, code: String, depId: String): Observable<CityModel> {
    return this.http.post<CityModel>(`${this.url}`,
      {
        name: name,
        code: code,
        _departmentId: depId

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  updateCity(name: String, code: String, id: String,depId:String): Observable<CityModel> {
    return this.http.post<CityModel>(`${this.url}/${id}/replace`,
      {
        name: name,
        code: code,
        _departmentId:depId
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  searchCity(id: String): Observable<CityModel>{
    return this.http.get<CityModel>(`${this.url}/${id}`)
  }

}


