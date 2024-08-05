import { Component, inject } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);

  deleteFromCart(item:any){
    this.cartService.delete(item);
  }
}
