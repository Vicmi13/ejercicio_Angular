import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import {EmpleadosComponent} from './empleados/empleados.component';
import {FrutaComponent} from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent} from './coche/coche.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path:'empleado', component:EmpleadosComponent},
    {path:'fruta', component:FrutaComponent},
    {path:'pagina-principal', component:HomeComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'contacto/:page', component:ContactoComponent},
    {path:'coche', component:CocheComponent},
    {path:'plantillas', component:PlantillasComponent},
    {path:'**', component:CocheComponent}
];


export const appRoutingProviders:any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);