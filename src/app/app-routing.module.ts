import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase1Component } from './clase1/clase1.component';
import { HomeComponent } from './home/home.component';
import { ListaClassComponent } from './lista-class/lista-class.component';
import { CalendarCComponent } from './vocabulario/diassemanas/calendar-c/calendar-c.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listadoDeClases', component:ListaClassComponent},
  {path:'clase1', component:Clase1Component},
  {path:'calendar',component:CalendarCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
