import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers: [PeticionesService]
})
export class CocheComponent implements OnInit {
  public coche:Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(private _peticionesService : PeticionesService) {
      this.coche = new Coche("", "", "");
      this.coches = [
        new Coche("seat", "120","rojo"),
        new Coche("focus", "180", "blanco")
      ];
   }

  ngOnInit() {
    console.log(this._peticionesService.getPrueba());
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log(result);
        if(!this.articulos){
          console.log('error en el servidor');
        }
      },
      error => {
        let errorMssg = <any> error;
        console.log(errorMssg);
      }
    );//Nos suscribimos al observable y recoger el error o resultado
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
    console.log(this.coche);
  }

}
