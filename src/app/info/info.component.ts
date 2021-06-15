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

	countries:any
	country: any = {}
	currencies: any

	constructor(private countryService: CountryserviceService, private activatedRoute: ActivatedRoute, private location: Location) { }

	ngOnInit(): void {
		this.get_country();
	}

	back() {
		this.location.back();
	  }

	get_country(){
		this.activatedRoute.params.subscribe((params: Params) => {
			this.countryService.getOneCountry(params.code).subscribe((data: any)=>{
				this.country = data;
				if (this.country.currencies[0].length < 0) return

				console.log(data.currencies);
				this.currencies = data.currencies
			})
		});
	}

	// trying to emit information i got from home component with each specific id

	// get_info(id) {
		
	// }

}
