import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public titulo : string;
  public name : string = 'Victor';
  public edad : number;
  public trueOrFalse : boolean = true;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Titulo de la pagina';
  }

}
