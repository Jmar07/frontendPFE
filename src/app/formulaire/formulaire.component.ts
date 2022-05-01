import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  options = ["ss", "za", "zzzzzzzzz"]

  constructor() { }

  ngOnInit(): void {
  }

}
