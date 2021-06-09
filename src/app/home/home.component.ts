import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  input: " ";
  Countries: any;

  constructor(private countryService: CountryserviceService) { }

  ngOnInit(): void {
    this.getData();
  }


  //open info-component
  sendNotification() {
    this.notifyParent.emit('Some value to send to the parent');
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
