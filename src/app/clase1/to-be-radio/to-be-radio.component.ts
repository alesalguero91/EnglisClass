import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-be-radio',
  templateUrl: './to-be-radio.component.html',
  styleUrls: ['./to-be-radio.component.css']
})
export class ToBeRadioComponent implements OnInit {

  preg1= ""
  preg2= ""
  preg3= ""
  preg4= ""
  preg5= ""
  preg6= ""
  preg7= ""

  resp1 = "si"
  resp2 = "si"
  resp3 = "si"
  resp4 = "si"
  resp5 = "si"
  resp6 = "si"
  resp7 = "si"

  punt1 = 0
  punt2 = 0
  punt3 = 0
  punt4 = 0
  punt5 = 0
  punt6 = 0
  punt7 = 0

  choose1=false
  choose2=false
  choose3=false
  choose4=false
  choose5=false
  choose6=false
  choose7=false

  mostrar=false

  cons1=[
    {
      opt1:"She is my brother",
      opt2: "He is my brother",
      opt3: "We are my brother"
    }
  ]

  cons2=[
    {
      opt1:"My mother and I is British",
      opt2:"My mother and I am British",
      opt3:"My mother and I are British"
    }
  ]
  cons3=[
    {
      opt1:"They are students",
      opt2:"We are students",
      opt3:"You are students"
    }
  ]
  cons4=[
    {
      opt1:"I am at home right now",
      opt2:"They are at home right now",
      opt3:"We are at home right now"
    }
  ]

  cons5=[
    {
      opt1:"They are at the hospital",
      opt2:"It is at the hospital",
      opt3:"We are at the hospital"
    }
  ]
  cons6=[
    {
      opt1:"He is nine o'clock",
      opt2:"It is nine o'clock",
      opt3:"She is nine o'clock"
    }
  ]

  cons7=[
    {
      opt1:"You are my friend",
      opt2:"They are my friend",
      opt3:"We are my friend"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  listo(){
    if(this.preg1== this.resp1){
      this.punt1 = 1
      this.choose1=true
    }
    if(this.preg2== this.resp2){
      this.punt2 = 1
      this.choose2=true
    }
    if(this.preg3== this.resp3){
      this.punt3 = 1
      this.choose3=true
    }
    if(this.preg4== this.resp4){
      this.punt4 = 1
      this.choose4=true
    }
    if(this.preg5== this.resp5){
      this.punt5 = 1
      this.choose5=true
    }
    if(this.preg6== this.resp6){
      this.punt6 = 1
      this.choose6=true
    }
    if(this.preg7== this.resp7){
      this.punt7 = 1
      this.choose7=true
    }

    let puntTotal= this.punt1 + this.punt2 + this.punt3 + this.punt4 + this.punt5 + this.punt6 + this.punt7

    alert("Respindiste bien " + puntTotal +"/7")
    this.mostrar= true

  }


}
