import { Component, OnInit } from '@angular/core';
import { verify } from 'crypto';

@Component({
  selector: 'app-to-be-select-opt',
  templateUrl: './to-be-select-opt.component.html',
  styleUrls: ['./to-be-select-opt.component.css']
})
export class ToBeSelectOptComponent implements OnInit {

  usuario:any={
    opt1: 0,
    opt2: 0,
    opt3:0,
    opt4:0,
    opt5:0,
    opt6:0,
    opt7:0,
    opt8:0,
    opt9:0,
    opt10:0,
    opt11:0,
    opt12:0,

    }

    resp1=false
    resp2=false
    resp3=false
    resp4=false
    resp5=false
    resp6=false
    resp7=false
    resp8=false
    resp9=false
    resp10=false
    resp11=false
    resp12=false

    verResp=false

  pregunta1 = [
    {
       valor: 1,
      txt: 'is'
    },
    {
      valor: 0,
      txt: 'am'
    },
    {
      valor: 0,
      txt: 'are'
    }

  ]

  pregunta2=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]

  pregunta3=[
    {
      valor: 1,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 0,
     txt: 'is'
   }
  ]
  pregunta4=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 1,
     txt: 'are'
   },
   {
     valor: 0,
     txt: 'is'
   }
  ]

  pregunta5=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]
  pregunta6=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]
  pregunta7=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 1,
     txt: 'are'
   },
   {
     valor: 0,
     txt: 'is'
   }
  ]
  pregunta8=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]
  pregunta9=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]
  pregunta10=[
    {
      valor: 1,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 0,
     txt: 'is'
   }
  ]
  pregunta11=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 1,
     txt: 'are'
   },
   {
     valor: 0,
     txt: 'is'
   }
  ]
  pregunta12=[
    {
      valor: 0,
     txt: 'am'
   },
   {
     valor: 0,
     txt: 'are'
   },
   {
     valor: 1,
     txt: 'is'
   }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  resultado(){

    let suma = Number(this.usuario.opt1) + Number(this.usuario.opt2) +Number(this.usuario.opt3)
    +Number(this.usuario.opt4)+Number(this.usuario.opt5)+Number(this.usuario.opt6) +Number(this.usuario.opt7)+
    Number(this.usuario.opt8)+Number(this.usuario.opt9)+Number(this.usuario.opt10)+Number(this.usuario.opt11)
    +Number(this.usuario.opt12)

    if(this.usuario.opt1>0){
      this.resp1=true
    }
    if(this.usuario.opt2>0){
      this.resp2=true
    }
    if(this.usuario.opt3>0){
      this.resp3=true
    }
    if(this.usuario.opt4>0){
      this.resp4=true
    }
    if(this.usuario.opt5>0){
      this.resp5=true
    }
    if(this.usuario.opt6 >0){
      this.resp6=true
    }
    if(this.usuario.opt7>0){
      this.resp7=true
    }
    if(this.usuario.opt8>0){
      this.resp8=true
    }
    if(this.usuario.opt9>0){
      this.resp9=true
    }
    if(this.usuario.opt10>0){
      this.resp10=true
    }
    if(this.usuario.opt11>0){
      this.resp11=true
    }
    if(this.usuario.opt12>0){
      this.resp12=true
    }



    alert("Respuestas correctas: " + suma +"/12")
    this.verResp=true
  }

}
