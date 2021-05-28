import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any

  constructor( private countryService: CountryserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data = this.countryService.data;
    console.log(this.data)
  }


}
