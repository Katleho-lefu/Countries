import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './../mock';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Data: any[], searchText: string): any[] {
    if (!Data) {
      return [];
    }
    if (!searchText) {
      return Data;
    }
    searchText = searchText.toLocaleLowerCase();

    return Data.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
