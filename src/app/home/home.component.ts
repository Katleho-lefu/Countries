import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  input: " ";
  Countries: any;

  constructor(private countryService: CountryserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  //set data from api to local storage
  getData() {
   // If there are no items in localStorage, set them
    if (!localStorage.getItem("Countries")) {
      this.countryService.getCountries().subscribe(data => {
        this.Countries = data;
        localStorage.setItem('Countries', JSON.stringify(this.Countries));
      })
      return
    }
    // else if items are available in localStorage, get them and put them in Countries[]
    this.Countries = JSON.parse(localStorage.getItem("Countries"));
  }

}
