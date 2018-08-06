import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  public nombre : string;
  public apellido : string;

  constructor() { }

  ngOnInit() {
    this.nombre = 'Victor';
    this.apellido = 'del Carpio'
  }
  cambioNombre(event : any){
    this.nombre = event.target.value;
}
}
