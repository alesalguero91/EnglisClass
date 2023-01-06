import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {

  menu= true
  tarea1 = false
  tarea2 = false
  tarea3 = false
  tarea4 = false
  tarea5 = false

  constructor() { }

  ngOnInit(): void {
  }

  Seleccion1(){
    this.menu= false
    this.tarea1 = true
    this.tarea2 = false
    this.tarea3 = false
    this.tarea4 = false
    this.tarea5 = false
  }
  Seleccion2(){
    this.menu= false
    this.tarea1 = false
    this.tarea2 = true
    this.tarea3 = false
    this.tarea4 = false
    this.tarea5 = false
  }
  seleccion3(){
    this.menu= false
    this.tarea1 = false
    this.tarea2 = false
    this.tarea3 = true
    this.tarea4 = false
    this.tarea5 = false
  }

  seleccion4(){
    this.menu= false
    this.tarea1 = false
    this.tarea2 = false
    this.tarea3 = false
    this.tarea4 = true
    this.tarea5 = false
  }

  seleccion5(){
    this.menu= false
    this.tarea1 = false
    this.tarea2 = false
    this.tarea3 = false
    this.tarea4 = false
    this.tarea5 = true
  }

  volverAlMenu(){
    this.menu= true
    this.tarea1 = false
    this.tarea2 = false
    this.tarea3 = false
    this.tarea4 = false
    this.tarea5 = false
  }

}
