import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class PaginationService {

  constructor() { }

  display(displayedValues: Product[], products: Product[], current: number, itemsPerPage: number): Product[]{
    displayedValues = [];
    let from = (current-1)*itemsPerPage;
    let to = current*itemsPerPage - 1;
    for(let i = from; i <= to; i++){
      if (i < products.length){
        displayedValues.push(products[i]);
      }
    }
    return displayedValues;
  }

  divide(products: Product[], itemsPerPage: number, intervals: number[]): number[]{
    intervals = [];
    let result = Math.ceil(products.length/itemsPerPage);
    for(let i = 0; i < result; i++){
      intervals.push(i+1);
    }
    return intervals
  }

  setCurrent(newCurrent: number, current: number, displayedValues: Product[], products: Product[], itemsPerPage: number){
    current = newCurrent;
    this.display(displayedValues, products, current, itemsPerPage);
  }

  next(displayedValues: Product[], products: Product[], current: number, itemsPerPage: number){
    this.setCurrent(current+1, current, displayedValues, products, itemsPerPage);
  }

  previous(displayedValues: Product[], products: Product[], current: number, itemsPerPage: number){
    this.setCurrent(current-1, current, displayedValues, products, itemsPerPage);
  }

  checkCurrent(index: number, current: number): boolean{
    return current == index;
  }

  checkGreater(current: number, intervals: number[]): boolean{
    return current >= intervals.length;
  }

  checkNegative(current: number): boolean{
    return current <= 1;
  }

}
