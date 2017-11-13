import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
    public nombrePrenda: string = 'Pantalones vaqueros';
    public coleccionRopa: Array<string>= ['Pantalones Blancos', 'Camiseta roja'];
    
    prueba(nombre_Prenda){
        return nombre_Prenda;
    }

    addRopa(nombre_prenda: string): Array<string>{
        this.coleccionRopa.push(nombre_prenda);
        return this.getropa();
    }

    getropa(): Array <string>{
        return this.coleccionRopa;
    }

    deleteRopa(index: number){
        this.coleccionRopa.splice(index,1);
        this.getropa();
    }


}
