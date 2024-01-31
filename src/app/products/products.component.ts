import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
//import products from '../../assets/products-list.json';
//import { MyProducts } from '../interfaces/my-products';
//import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProductRequestsService } from '../services/product-request.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent , CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products !: any;
  constructor( private productRequest:ProductRequestsService){}
  ngOnInit(){
    this.productRequest.getProducts().subscribe((res : any) =>this.products = res["products"] )
  }

}







