import { FormGroup, FormBuilder , FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
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
  this.http.post('http://localhost:8000/api/login',this.loginForm.value , {withCredentials:true /**to show coockies**/})
  
.subscribe( ()=> this.router.navigateByUrl('/'));


}
}
