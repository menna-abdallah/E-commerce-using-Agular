import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';
import { CounterService } from '../services/counter.service';





@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLinkActive , RouterLink , FontAwesomeModule , NgStyle ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private counterService: CounterService) {}
  counter = 0;
  ngOnInit() {
    this.counterService
      .getCounter()
      .subscribe((value) => this.counter = value);
  }

}


  