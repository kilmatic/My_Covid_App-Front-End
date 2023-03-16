import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder, private authService: AuthService) {
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
