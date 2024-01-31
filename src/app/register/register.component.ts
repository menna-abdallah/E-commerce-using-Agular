import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {confirmPasswordValidator , spaceCheck} from '../confirm-password.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet , Router, RouterLink  } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone:true,
  imports :[ReactiveFormsModule , RouterOutlet ,NgIf , RouterLink ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registeration: FormGroup;

  constructor(private router : Router) {
    this.registeration = new FormGroup(
      {

        name: new FormControl ('',[
          Validators.required,
        ]),

        usname: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          spaceCheck
        ]),

        email: new FormControl('', [
          Validators.email, 
          Validators.required,
          Validators.pattern("^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$")
          
        ]),

        // password Validations
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"),
        ]),

        // confirm password Validations
        cpassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"),
        ]),
      },

      // check confimation
      confirmPasswordValidator
    );
  }


  login(){

      this.router.navigate(['login'])
  
    
  }

  register() {


  }
}


