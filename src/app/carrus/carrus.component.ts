import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrus',
  templateUrl: './carrus.component.html',
  styleUrls: ['./carrus.component.css']
})
export class CarrusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verQueOnda(){
    console.log("Hola!!")
  }
}
