import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServService } from '../serv.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  formulaireForm = new FormGroup({
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)    
  })


  myControl = new FormControl(); 

  filteredOptions: Observable<string[]>;


  constructor(  private service : ServService , private router: Router ) { }

  ngOnInit(): void {
/*
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );*/
    this.getAllData()

  }

  logout(){
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login")
    
  }

  getAllData(){
    this.service.getData().subscribe((res: any) => {
      console.log(res);
    })
  }

/*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }*/
}
