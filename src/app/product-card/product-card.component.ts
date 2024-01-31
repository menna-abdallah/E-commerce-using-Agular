import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgStyle , NgIf  } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule , RatingComponent , ButtonModule ,NgStyle , NgIf ,RatingModule , FormsModule , RouterLink , NavBarComponent ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() currentproduct!: any ;

  ngOnInit() {
    if (this.currentproduct) {
      this.currentproduct.rating = Math.floor(this.currentproduct.rating);
    }
  }

  constructor(private router : Router){}

  ShowDetails(id:string , name:string){
    this.router.navigate(['/product-details' , id , name])

  }

}

