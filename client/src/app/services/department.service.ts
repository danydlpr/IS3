import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../models/departmentModel.model';
import { CityModel } from '../models/cityModel.model';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  url2: String = "http://localhost:3000/api/departments"
  url :string="http://localhost:3000/api/cities?filter=%7B%22where%22%3A%7B%22_departmentId%22%3A%7B%22like%22%3A%22"
  
  constructor(private http: HttpClient) {


  }

  loadAllDepartments(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(`${this.url2}`)
  }
  loadCitiesOfDep(id: String): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`${this.url}${id}%22%7D%7D%7D&`)
  }

  createDepartment(name: String, code: String): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(`${this.url2}`,
      {
        name: name,
        code: code

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  updateDepartment(name: String, code: String, id: String): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(`${this.url2}/${id}/replace`,
      {
        name: name,
        code: code,
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  searchDepartment(id: String): Observable<DepartmentModel>{
    return this.http.get<DepartmentModel>(`${this.url2}/${id}`)
  }

}
