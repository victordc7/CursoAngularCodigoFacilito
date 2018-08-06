import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public titulo : string;
  public navList : string[];

  public trueOrFalse : boolean = true;
  public moreInformation :boolean = false;
  public activenavbar : boolean = false;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Titulo de la pagina';
    this.navList = [
      'Principal',
      'Galeria',
      'Contacto'
    ];
  }

}
