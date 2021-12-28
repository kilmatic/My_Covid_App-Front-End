import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this._formBuilder.group({
      'username': [''],
      'email': [''],
      'password': ['']
    })
   }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe(data => {
      console.log(data);
    })
  }

}
