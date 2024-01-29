import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsSectionComponent } from '../products-section/products-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , ProductsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
