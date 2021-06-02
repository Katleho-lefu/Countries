import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  input: " ";
  Countries: any;

  constructor(private countryService: CountryserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  //set data from api to local storage
  getData() {

    if (!localStorage.getItem("Countries")) {
      this.countryService.getCountries().subscribe(data => {
        this.Countries = data;
        localStorage.setItem('Countries', JSON.stringify(this.Countries));
      })
      return
    }
    
    this.Countries = JSON.parse(localStorage.getItem("Countries"));
  }


}
