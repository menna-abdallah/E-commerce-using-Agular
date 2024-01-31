import { Component , Input } from '@angular/core';
import { MyProducts } from '../interfaces/my-products';
import { ActivatedRoute , RouterOutlet , Router, RouterLink } from '@angular/router';
import products from '../../assets/products-list.json';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgStyle , NgIf  } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { ProductRequestsService } from '../services/product-request.service';
import { error } from 'console';




@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavBarComponent  , NgStyle , NgIf , RatingComponent ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  constructor(private activeRoute : ActivatedRoute , private productrequest : ProductRequestsService ){
     
  }

  products: Array<MyProducts> = products;
  productdetail!:any;
  @Input() id : number = 0;


  ngOnInit()
  {
    this.productrequest.getDetails(this.id).subscribe((res : any)=> this.productdetail = res , (error)=>alert(error))
   this.productdetail = this.products.find((product : any) => product.id == this.id);

   if (this.productdetail) {
    this.productdetail.rating = Math.floor(this.productdetail.rating);
  }

  }
 
}

