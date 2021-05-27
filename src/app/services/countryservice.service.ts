import { Injectable } from '@angular/core';
import { Data } from './../mock';


@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  data= Data

  constructor() { }

  getData(){
    return this.data
  }
}
