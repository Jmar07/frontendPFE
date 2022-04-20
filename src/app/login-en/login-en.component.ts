import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-en',
  templateUrl: './login-en.component.html',
  styleUrls: ['./login-en.component.css']
})
export class LoginEnComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
