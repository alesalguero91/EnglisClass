import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Clase1Component } from './clase1/clase1.component';
import { FormsModule } from '@angular/forms';
import { VerbToBeComponent } from './clase1/verb-to-be/verb-to-be.component';
import { ToBeDrapDrpComponent } from './clase1/to-be-drap-drp/to-be-drap-drp.component';
import { ToBeSelectOptComponent } from './clase1/to-be-select-opt/to-be-select-opt.component';
import { PronDragDropComponent } from './clase1/pron-drag-drop/pron-drag-drop.component';
import { ToBeInputComponent } from './clase1/to-be-input/to-be-input.component';
import { ToBeRadioComponent } from './clase1/to-be-radio/to-be-radio.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaClassComponent } from './lista-class/lista-class.component';
import { BannerComponent } from './banner/banner.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarrusComponent } from './carrus/carrus.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Clase1Component,
    VerbToBeComponent,
    ToBeDrapDrpComponent,
    ToBeSelectOptComponent,
    PronDragDropComponent,
    ToBeInputComponent,
    ToBeRadioComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListaClassComponent,
    BannerComponent,
    InicioComponent,
    CarrusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
