import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import products from '../../assets/products-list.json'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgbCarouselModule  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  products : any = products;

  
}
