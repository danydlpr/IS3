import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyModel } from '../models/property.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  url: String = "http://localhost:3000/api/properties"
  urlOT :string="http://localhost:3000/api/properties?filter=%7B%22where%22%3A%7B%22offerType%22%3A%22"
  urlT :string="http://localhost:3000/api/properties?filter=%7B%22where%22%3A%7B%22type%22%3A%22"
  urlLMP = "http://localhost:3000/api/properties?filter=%7B%22where%22%3A%7B%22contactSeller%22%3A%7B%22like%22%3A%22"

  constructor(private http: HttpClient) { }

  loadAllMyProperties(id: String):Observable<PropertyModel[]>
  {
    return this.http.get<PropertyModel[]>(`${this.urlLMP}${id}%22%7D%7D%7D`)
  }
  loadAllProperties():Observable<PropertyModel[]>
  {
    return this.http.get<PropertyModel[]>(`${this.url}`)
  }


  searchProperty(id: String): Observable<PropertyModel>{
    return this.http.get<PropertyModel>(`${this.url}/${id}`)
  }

  
  updateProperty(a: String, p: String, ph: String, tp : String, 
    tp2: String, cs:String, dep: String, c: String,id:String,des:string): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url}/${id}/replace`,
      {
        address: a,
        price: p,
        photography: ph,
        offerType: tp,
        type: tp2,
        contactSeller: cs,
        department: dep,
        city: c,
        description:des
      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })
  }


  updatePropertyStatus(property: PropertyModel, id:string): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url}/${id}/replace`,
      {
        address: property.address,
        price: property.price,
        photography: property.photography,
        offerType: property.offerType,
        type: property.type,
        contactSeller: property.contactSeller,
        department: property.department,
        city: property.city,
        description: property.description,
        status: "Solicitada"

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }


  updatePropertyStatusBack(id:string, property:PropertyModel): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url}/${id}/replace`,
      {
        address: property.address,
        price: property.price,
        photography: property.photography,
        offerType: property.offerType,
        type: property.type,
        contactSeller: property.contactSeller,
        department: property.department,
        city: property.city,
        description: property.description,
        status: "Disponible"

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  aceptProperty(id:string, property:PropertyModel): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url}/${id}/replace`,
      {
        address: property.address,
        price: property.price,
        photography: property.photography,
        offerType: property.offerType,
        type: property.type,
        contactSeller: property.contactSeller,
        department: property.department,
        city: property.city,
        description: property.description,
        status: "Aceptada"

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }
  loadPropertiesByType(tipo: String):Observable<PropertyModel[]>{
    
    return this.http.get<PropertyModel[]>(`${this.urlOT}${tipo}%22%7D%7D`)
    
  }

  loadPropertiesByType2(tipo2: String):Observable<PropertyModel[]>{
    return this.http.get<PropertyModel[]>(`${this.urlT}${tipo2}%22%7D%7D`)
    
  }
}
