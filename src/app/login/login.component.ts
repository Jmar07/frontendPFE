
import { FormGroup, FormBuilder , FormControl, Validators } from '@angular/forms';
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
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)    
  })

  constructor( private formBuilder : FormBuilder, private http:HttpClient, private router: Router ) {
 }



  ngOnInit(): void {

    
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

error:"";
username:"";

loginFun(){

  console.log(this.loginForm.controls);

  if(!this.loginForm.valid){
    console.log("leee");
    return;
  }
  else{

    this.http.post('http://localhost:8000/login',this.loginForm.value)
  
    .subscribe( (results)=>{
      
      localStorage.setItem("username",results.toString());
      this.router.navigateByUrl("/formulaire")
      
    },error=>{
      console.log(error);
      this.error = error.error;
    } 
    
    );}

  }


}
