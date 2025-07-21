import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Baseurl:string="http://localhost:5144/api/Auth/";
constructor(private http:HttpClient) { }
  login(model:any){
    return this.http.post(this.Baseurl+'Login',model).pipe(
      map((response:any)=>{
        const user=response;
        if(user){
          localStorage.setItem('token',user.token);
        }
      })
    )
  }
  register(model:any){
    return this.http.post(this.Baseurl+'Register',model);
  }
}
