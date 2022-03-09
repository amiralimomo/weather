import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take, tap,takeWhile } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string="https://api.openweathermap.org/data/2.5/"
  apiKey:string="968a17df1658fc3a091027e18aab2ef0"
 
  getCurrentWeather(city="tehran"):Observable<any>{
  
   return this.http.get<any>(this.baseUrl+'weather?q='+ city + '&appid=' + this.apiKey+"&units=metric")
  }
  getFiveDaysWeather(city="tehran"):Observable<any>{
    return this.http.get<any>(this.baseUrl+'forecast?q='+ city + '&appid=' + this.apiKey+"&units=metric").pipe(
      map(i=>{return i.list}),
     
      )
   }
  

}
