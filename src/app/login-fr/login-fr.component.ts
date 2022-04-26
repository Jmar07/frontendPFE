import { FormGroup, FormBuilder , FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-fr.component.html',
  styleUrls: ['./login-fr.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor( private formBuilder : FormBuilder, private http:HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:'',
      password:''
    });
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

loginFun(){

  

    this.http.post('http://localhost:8000/login',this.loginForm.value , {withCredentials:true /**to show coockies**/})
  
    .subscribe( (results)=> console.log(results)
    
    );





}
}
