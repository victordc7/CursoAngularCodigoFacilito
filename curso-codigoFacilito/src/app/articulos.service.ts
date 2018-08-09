import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, count } from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs';
import { async } from '../../node_modules/rxjs/internal/scheduler/async';



@Injectable({
  providedIn: 'root'
})


export class ArticulosService {

  
  public repoObserver : Observable<any>;


  constructor(private http : HttpClient){

  }
  getAll(){
    this.repoObserver = this.http.get('https://api.github.com/users/victordc7/repos').pipe(map(data => {return data}));
  }
}