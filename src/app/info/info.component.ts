import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

	country: any = {}

	constructor(private countryService: CountryserviceService, private activatedRoute: ActivatedRoute, private location: Location) { }

	ngOnInit(): void {
		this.get_country();
	}

	//back to previous page
	back() {
		this.location.back();
	  }

	// get the country that was clicked in the home page
	get_country(){
		this.activatedRoute.params.subscribe((params: Params) => {
			this.countryService.getOneCountry(params.code).subscribe((data: any)=>{
				this.country = data;
			})
		});
	}

}
