import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {

        path:"",
        component: HomeComponent,
        title:"Our Stor"
    },
    {
        path:"all-products",
        component:ProductsComponent,
        title:"Products"
    },
    {
        path:"product-details",
        component:ProductDetailsComponent,
        title:"More Details"
    },
    {
        path:"login",
        component:LogInComponent,
        title:"Log In"
    },
    {
        path:"cart",
        component:CartComponent,
        title:"your cart"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Register"
    },
    {
        path:"**",
        component:NotFoundComponent,
        title:"Not Found Page"
    }
];
