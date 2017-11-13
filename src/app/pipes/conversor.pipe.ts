
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name:'conversor'})
export class ConversorPipe implements PipeTransform{
    transform(value1:string, por:string){
        let valueOne =parseInt(value1);
        let valueTwo = parseInt(por);

        let result = `La multiplicación de ${valueOne} x ${por} es: ` +valueOne*valueTwo;

        return result;
    }
}