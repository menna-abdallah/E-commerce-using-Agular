import { Component  , Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: any;
  starsArray?: boolean[];

  ngOnInit() {
    
    // get integer number
    let roundedRating = Math.round(this.rating); 
    // initialize array of boolean with 5 false 
    this.starsArray = Array(5).fill(false).fill(true, 0, this.rating);
   
    // set number of int stars in the array to true
    for (let i = 0; i < roundedRating; i++) {
      this.starsArray[i] = true;
    }
  }

}


