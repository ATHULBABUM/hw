import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  constructor( private http:HttpClient) { }

  signup(data){
    console.log("in the services in angular");
    return this.http.post("http:localhost:3000/signup",data);
  }

}
