import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient){ }

  login_sign(data: any){
    return this.http.post(`${environment.digicofferurl}login`,data)
  }
  
}
