import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink , FormsModule ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
 
  formValues = {
    email: "",
    password: ""
  }

  handleLogin(form:any){
    console.log(this.formValues);

  }

}


