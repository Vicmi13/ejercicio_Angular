import { Empleado } from './empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  {


  public titulo = 'Componente Empleados'
  public empleado:Empleado;
  public trabajadores:Array <Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public colorSeleccionado: string;

  constructor(){
     this.empleado = new Empleado('Vicman Empleado', 24, 'Developer', true);
     this.trabajadores = [
        new Empleado('Victor T. Trabajador', 49, 'Software Enginner', true),
        new Empleado('Kalei Ojeda', 32, 'Ventas', true),
        new Empleado('Miguel Juarez', 35, 'Doctor', false)
     ];
     this.trabajador_externo = true;
     this.color = "red";
     this.colorSeleccionado="#ccc";


  }

  ngOnInit(){
    console.log(this.empleado);
  }

  cambiarExterno(valor){
     this.trabajador_externo = valor
  }

  logColorSeleccionado(){
    console.log("color seleccionado: " + this.colorSeleccionado );
  }

}
