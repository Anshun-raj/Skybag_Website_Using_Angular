import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
     {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'product',
        component:ProductComponent
    },
    {
        path:'service',
        component:ServiceComponent
    },
    {
        path:'review',
        component:ReviewComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'cart',
        component:CartComponent
    }
];
