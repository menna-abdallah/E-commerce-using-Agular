import { Component , Input} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MyProducts } from '../interfaces/my-products';
import products from '../../assets/products-list.json'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  products :Array<MyProducts> = products;
  productsDetails:any ;

  @Input() id ?: string;
  
  ngOnInit(){
     this.productsDetails = this.products.find((product : any) => product.id == this.id);
   }
}


