import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
//import products from '../../assets/products-list.json';
//import { MyProducts } from '../interfaces/my-products';
import { Router, RouterLink } from '@angular/router';
import { ProductRequestsService } from '../services/product-request.service';


@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [ProductCardComponent , CommonModule  , RouterLink],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent {

  products !: any;
  constructor(private router : Router , private productRequest:ProductRequestsService){}
  ngOnInit(){
    this.productRequest.getProducts().subscribe((res : any) =>this.products = res["products"] )
  }

  ShowMore(){
    this.router.navigate(['all-products'])

  }

}





