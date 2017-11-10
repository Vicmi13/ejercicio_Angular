import { Component} from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent  {

 public nombreComponente: string = "Componente de fruta";
 public frutas:string = "Platano, mango, manzana"
 public nombre:string;
 public edad:number;
 public ismayorEdad: boolean;
 public tiposFruta: Array<string>= ["rojas", "amarillas", "verdes"];
 public tipoDeFruta: Array<any>= ["rojas", true, 12, -12];
 
    constructor(){
        this.nombre = 'Victor';
        this.edad = 24;
        this.ismayorEdad = true;
    }

    ngOnInit(){
      this.setNombre("Victor");
      this.setEdad(26);
      console.log(this.nombre + " " + this.edad);
    }

    setNombre(nombre:string){
        this.nombre= nombre;
    }

    setEdad(edad:number){
      this.edad =edad;
    }

    getEdad(){
      return this.edad;
    }

 
}
