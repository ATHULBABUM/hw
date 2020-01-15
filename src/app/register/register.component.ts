import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { MyAppService } from '../my-app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private myAppServices:MyAppService, private formBuilder:FormBuilder,private router:Router ) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName:[],
      lastName:[],
      email:[],
      password:[],
      confirmPassword:[],
      gender:[],
      country:[]
    })
  }
  Signup(){
    // this.router.navigate([HomeComponent]);
    console.log(this.registerForm.value);
    // this.myAppServices.signup(this.registerForm)
    // .subscribe((result)=>{
    //   console.log("ok");
    // })
    this.myAppServices.signup(this.registerForm)
    .subscribe((result)=>{
      console.log(result);
      
    })
  }

}
