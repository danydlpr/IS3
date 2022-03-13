import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestModel } from '../models/requestModel.model';
import { Observable } from 'rxjs';
import { PropertyModel } from '../models/property.model';
import { LOCATION_INITIALIZED } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = "http://localhost:3000/api/requests?filter=%7B%22where%22%3A%7B%22customerId%22%3A%7B%22like%22%3A%22"
  urlD="http://localhost:3000/api/requests/"
  urlC="http://localhost:3000/api/requests"
  constructor(private http: HttpClient) { }

  deleteRequest(id: String): Observable<RequestModel> {
    return this.http.delete<RequestModel>(`${this.urlD}${id}`)
  }

  loadAllRequest(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(`${this.urlC}`)
  }

  loadMyRequest(id: String): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(`${this.url}${id}%22%7D%7D%7D`)
  }

  createRequest(property: PropertyModel, email: String): Observable<RequestModel> {
    return this.http.post<RequestModel>(`${this.urlC}`,
      {
        customerId: email,
        property: property,
        requestDate: Date.now()
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }



}
