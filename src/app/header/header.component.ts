import { Component, OnInit} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { ReviewComponent } from '../review/review.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ReviewComponent,
    ContactComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{

  constructor(private cartService:CartService){}
  
   public totalItem:number=0;

   ngOnInit(): void {
     this.cartService.getProducts().subscribe(res=>this.totalItem=res.length

     )}

  


}
