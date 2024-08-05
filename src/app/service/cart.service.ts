import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[]=[];

  public productList=new BehaviorSubject<any>([])

  

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product:any){
    this.items.push({...product});
    this.productList.next(this.items);
  }

  getItems(){
    return this.items;

  }

  

  delete(item:any){
    this.items=this.items.filter((i)=>i.id !==item.id);
  }

  
}
