import { Component, OnInit } from '@angular/core';
import * as data from '../particlesjs-config.json';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

username:string = "";

  constructor() { }

  ngOnInit(): void {
   // this.username = localStorage.getItem("username");
  }

}
