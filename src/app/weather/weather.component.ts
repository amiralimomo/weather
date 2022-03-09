import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { map, take } from 'rxjs/operators';
import { Current } from '../models/currentModel';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  fiveDays!: Current[]
  
  current!: Current
  cityName = "تهران"

  ngOnInit(): void {
    this.current = {
      temp: 0,
      img: ''
    }
    this.fiveDays=[]
    this.apiService.getFiveDaysWeather().subscribe((data) => {
     this.setFive(data)
    })
    this.apiService.getCurrentWeather().subscribe((data) => {
      this.setCurrent(data)
    })

  }
  getCityName(e: string) {

    this.cityName = e
    this.apiService.getFiveDaysWeather(e).subscribe((data) => {

      this.setFive(data)
    })
    this.apiService.getCurrentWeather(e).subscribe((data) => {
      this.setCurrent(data)
    })

  }


  setFive(data:any){
    this.fiveDays=[]
  let getFour=data.filter((item:any,index:number)=>{return index<4})
  getFour.filter((item:any)=>{this.fiveDays.push({temp:item.main.temp,img: this.setIcon(item.weather[0].main)})})

  }

  setCurrent(data:any) {
    this.current.temp = data.main.temp
    this.current.img = this.setIcon(data.weather[0].main)
  }


  setIcon(e: string) {
    switch (e) {
      case "Haze":
        // code block
        return "2682813_cloud_clouds_cloudy_fog_forecast_icon.png"
        break;
      case "Rain":
        // code block
        return "2682835_cloud_cloudy_forecast_precipitation_rain_icon.png"
        break;
      case "Snow":
        // code block
        return "2682816_cloud_cloudy_forecast_precipitation_snow_icon.png"
        break;
      case "Rain":
        // code block
        return "2682813_cloud_clouds_cloudy_fog_forecast_icon.png"
        break;
      case "Clear":
        // code block
        return "2682848_day_forecast_sun_sunny_weather_icon.png"
        break;
      case "Clouds":
        // code block
        return "2682850_cloud_clouds_cloudy_forecast_weather_icon.png"
        break;
      case "Dust":
        // code block
        return "2682802_cloudy_day_fog_foggy_mist_icon.png"
        break;
      case "Clouds":
        // code block
        return "2682850_cloud_clouds_cloudy_forecast_weather_icon.png"
        break;
      case "thunderstorm":
        // code block
        return "2682828_cloud_light bolt_lightning_rain_storm_icon.png"
        break;


      default:
        // code block
        return "2682813_cloud_clouds_cloudy_fog_forecast_icon.png"
    }
  }

}
