import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeModel } from '../models/typeModel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { PropertyModel } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  url: String = "http://localhost:3000/api/propertyTypes"
  urlEmail:String="http://localhost:3000/api/propertyTypes/sendEmail?message="
  constructor(private http: HttpClient) { }

  sendEmailAdviser(user:UserModel,p:string){
    console.log(user.email)
    return this.http.get(`http://localhost:3000/api/propertyTypes/sendEmail?message=sus%20credenciales%20son:%20${user.email}%20-%20${p}&subject=Credenciales%20de%20acceso&emailAddresses=${user.email}`,)

  }
  
  sendEmail(user:UserModel, property: PropertyModel){
    return this.http.get(`${this.urlEmail}El%20cliente%20${user.firstName}%20${user.firstLastName}%20Con%20correo:${user.email}%0AHa%20solicitado%20el%20siguiente%20inmueble:%0ADescripcion:%20${property.description}%0ATipo%20de%20oferta:%20${property.offerType}%0APrecio:%20${property.price}%0ATipo%20de%20inmueble:%20${property.type}&subject=Soliciud%20de%20inmueble&emailAddresses=${property.contactSeller}`,
   )
  }

  sendMessage(name:String, email: String, d: String){
    return this.http.get(`${this.urlEmail}El%20cliente%20${name}%20con%20correo:${email}%0AHa%20enviado%20el%20siguiente%20mensaje:%0A${d}&subject=Mensaje%20de%20cliente&emailAddresses=daniel@yopmail.com`,
   )
  }

  loadAllTypes(): Observable<TypeModel[]> {
    return this.http.get<TypeModel[]>(`${this.url}`)
  }

  createType(name: String): Observable<TypeModel> {
    return this.http.post<TypeModel>(`${this.url}`,
      {
        name: name

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  updateType(name: String, id: String): Observable<TypeModel> {
    return this.http.post<TypeModel>(`${this.url}/${id}/replace`,
      {
        name: name
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  searchType(id: String): Observable<TypeModel>{
    return this.http.get<TypeModel>(`${this.url}/${id}`)
  }
}
