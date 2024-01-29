import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink , FormsModule , NavBarComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  formValues = {
    email: "",
    password: ""
  }

  handleForm(form : any) {
    console.log(this.formValues);
    
  }
}

