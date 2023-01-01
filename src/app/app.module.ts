import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Clase1Component } from './clase1/clase1.component';
import { FormsModule } from '@angular/forms';
import { VerbToBeComponent } from './clase1/verb-to-be/verb-to-be.component';
import { ToBeDrapDrpComponent } from './clase1/to-be-drap-drp/to-be-drap-drp.component';
import { ToBeSelectOptComponent } from './clase1/to-be-select-opt/to-be-select-opt.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Clase1Component,
    VerbToBeComponent,
    ToBeDrapDrpComponent,
    ToBeSelectOptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
