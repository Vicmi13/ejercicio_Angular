import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo = "Pagina principal";
  public listadoRopa:Array<string>;
  public prendaParaGuardar:string;
  public fecha;
  public nombre:string = 'victor torres valencia'

  constructor(private _ropaService: RopaService){
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit(){
    this.listadoRopa = this._ropaService.getropa();
    console.log(this._ropaService.prueba('camiseta NIke') + ' ' + this.listadoRopa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prendaParaGuardar);
    this.prendaParaGuardar= null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}
