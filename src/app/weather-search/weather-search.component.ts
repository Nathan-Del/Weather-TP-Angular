import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  citySearch: string;
  weatherResult: any;
  isSearch: boolean = false;
  cityName: string;
  URLicon: string;

  constructor(private weatherDataService: WeatherDataService) { }

  searchCity(){
    this.weatherDataService.getWeather(this.citySearch).subscribe((response: any) => 
    {
      console.log(response);
      this.weatherResult = response;
      this.URLicon = "http://openweathermap.org/img/wn/" + this.weatherResult.weather[0].icon + "@2x.png";
      if(this.citySearch == ''){
        this.isSearch = false;
      }
      else if(this.citySearch != ''){
        this.isSearch = true;
      }
    })
  }

  goToDetails(name){
    window.open(`https://www.xn--mto-bmab.fr/` + name, "_blank");
  }


  ngOnInit(): void {
  }

}
