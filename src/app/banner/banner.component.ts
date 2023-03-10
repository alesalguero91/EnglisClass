import { Component, OnInit } from '@angular/core';
import { animate, trigger, state, transition, style} from '@angular/animations';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('enterState', [
      state('void',style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(1300,style({
          transform: 'translateX(0%)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  mensaje1: String= "APRENDE INGLÉS"
  mensaje2: String= "DE UNA MANERA"
  mensaje3: String= "RÁPIDA Y DIVERTIDA"

  constructor() { }

  ngOnInit(): void {
  }

}
