import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetPFE';

  constructor( private router: Router ) {

   }
  onSend(){
    
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  
}

