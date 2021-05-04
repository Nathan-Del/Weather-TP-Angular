import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  getWeatherForweek(name: string){
    return this.http.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${name}&cnt=14&appid=`);
  }

  getWeather(name: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d1f1192c61bff34c70979e832a2dbab3`);
  }

  getIconWeather(name: string){
    return this.http.get(`http://openweathermap.org/img/wn/${name}@2x.png`);
    
  }

}
