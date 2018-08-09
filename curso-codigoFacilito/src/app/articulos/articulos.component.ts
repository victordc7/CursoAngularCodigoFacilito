import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent implements OnInit {

  constructor(public articulosS : ArticulosService) { }

  ngOnInit() {
    this.articulosS.getAll();
  }

}
