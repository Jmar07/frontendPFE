import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  /* getData(){
    return this.http.get('http://localhost:8000/client')
    .pipe(
        map((response:[]) => response.map(item => item['des']))
      )
  } */
}
