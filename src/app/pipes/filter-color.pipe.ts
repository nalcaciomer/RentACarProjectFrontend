import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterColor',
})
export class FilterColorPipe implements PipeTransform {
  transform(value: CarDetail[], filterColorText: string): CarDetail[] {
    filterColorText = filterColorText
      ? filterColorText.toLocaleLowerCase()
      : '';
    return filterColorText
      ? value.filter(
          (c: CarDetail) =>
            c.colorName.toLocaleLowerCase().indexOf(filterColorText) !== -1
        )
      : value;
  }
}
