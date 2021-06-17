import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CountryserviceService {

	api = "https://restcountries.eu/rest/v2";

	constructor(private http: HttpClient) { }

	//get data from api
	getCountries (): Observable<any> {
		return this.http.get(`${this.api}`);
	}

	//get data from one country [identified by the code]
	getOneCountry(code: any){
		return this.http.get(`${this.api}/alpha/${code}`)
	}
}
