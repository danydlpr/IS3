import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyModel } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  url: String = "http://localhost:3000/api/Users"
  url2: String = "http://localhost:3000/api/properties"
  urlA: String = "http://localhost:3000/api/Users?filter=%7B%22where%22%3A%7B%22rol%22%3A%222%22%7D%7D"

  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }


  searchAdviser(id: String): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/${id}`)
  }

  updateAdviser(n: String, p: String, ln: String, e: String, ph: String, id: String): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/${id}/replace`,
      {
        email: e,
        password: p,
        firstLastName: ln,
        firstName: n,
        phone: ph,
        rol: 2

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  registryAdviser(n: String, p: String, ln: String, e: String, ph: String): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}`,
      {
        email: e,
        password: p,
        firstLastName: ln,
        firstName: n,
        phone: ph,
        rol: 2

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  registryAdmin({ n, p, ln, e, ph }): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}`,
      {
        email: e,
        password: p,
        firstLastName: ln,
        firstName: n,
        phone: ph,
        rol: 3

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }


  loadAdvisers() {
    return this.http.get<UserModel[]>(`${this.urlA}`)

  }
  verifyUserInSession() {
    let session = localStorage.getItem("activeUser");
    if (session != undefined) {
      this.userInfo.next(JSON.parse(session));
    }
  }

  isActiveSession() {
    return this.userInfo.getValue().isLogged;
  }

  getRol(){
    return this.userInfo.value.rol;
  }


  getUserInfo() {
    return this.userInfo.asObservable();
  }

  loginUser(username: String, pass: String): Observable<UserModel> {
    try {

      return this.http.post<UserModel>(`${this.url}/login?include=User`,
        {
          email: username,
          password: pass

        }, {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      })
    } catch (error) {
      return null;
    }


  }

  saveLoginInfo(user: UserModel) {
    user.isLogged = true;
    this.userInfo.next(user);
    localStorage.setItem("activeUser", JSON.stringify(user));
  }


  logoutUser(): Observable<boolean> {
    let token = JSON.parse(localStorage.getItem("activeUser")).id;
    try {

      this.http.post(`${this.url}/logout?access_token=${token}`, {
        "access_token": token
      },
        {
          headers: new HttpHeaders({
            "content-type": "application/json"
          })
        });
      localStorage.removeItem("activeUser");
      this.userInfo.next(new UserModel());

      return Observable.create(observer => { observer.next(true); });
    } catch{
      return Observable.create(observer => { observer.next(false); });
    }
  }
  registryUser(n: String, p: String, ln: String, e: String, ph: String): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}`,
      {
        email: e,
        password: p,
        firstLastName: ln,
        firstName: n,
        phone: ph,
        rol: 1

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }
  registryProperty(a: String, p: String, ph: String, tp: String,
    tp2: String, cs: String, dep: String, c: String, des: String): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url2}`,
      {
        address: a,
        price: p,
        photography: ph,
        offerType: tp,
        type: tp2,
        contactSeller: cs,
        department: dep,
        city: c,
        description: des

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }
}
