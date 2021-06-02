import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './../mock';


@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  api = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient) { }

  //get data from mock data
  // getData(){
  //   return this.data
  // }

  //get data from api
  getCountries (): Observable<any> {
    return this.http.get(this.api);
  }
}
