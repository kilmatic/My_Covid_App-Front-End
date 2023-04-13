import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this._formBuilder.group({
      'username': [''],
      'email': [''],
      'password': [''],
      'confirmpassword': ['']
    });
   }

  ngOnInit(): void {
  }

  register(){
    if(this._formBuilder.control('confirmpassword') === this._formBuilder.control('password')){
      this.authService.register(this.registerForm.value).subscribe(data => {
        this.router.navigate(["login"]);
      });
    }
  }

}
