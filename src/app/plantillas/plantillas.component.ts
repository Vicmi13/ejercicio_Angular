import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  public titulo: string;
  public administrador:boolean;
  
  constructor() { 
    this.administrador = true;
    this.titulo = "Aplicacion de plantillas"
  }

  ngOnInit() {
  }

  cambiar(value){
    this.administrador = value;
  }

}
