import { Component, inject } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  {
  cartService = inject(CartService);

  products: any = [
    { name: 'Trolly Bag 1', price: '4800/-', id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe2BseK25XsOKebRLCHFMR6XHbQq9UEHayg&s' },
    { name: 'Trolly Bag 2', price: '4500/-', id: 2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe2BseK25XsOKebRLCHFMR6XHbQq9UEHayg&s' },
    { name: 'Trolly Bag 3', price: '4600/-', id: 3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe2BseK25XsOKebRLCHFMR6XHbQq9UEHayg&s' },
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
