import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string="https://api.openweathermap.org/data/2.5/"
  apiKey:string="968a17df1658fc3a091027e18aab2ef0"
  fiveDays!:any
  Current!:any
  getCurrentWeather(city="tehran"):Observable<any>{
   return this.http.get<any>(this.baseUrl+'weather?q='+ city + '&appid=' + this.apiKey)
  }
  getFiveDaysWeather(city="tehran"):Observable<any>{
    return this.http.get<any>(this.baseUrl+'forecast?q='+ city + '&appid=' + this.apiKey)
   }
  

}
