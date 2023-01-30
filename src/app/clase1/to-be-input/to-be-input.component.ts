import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-to-be-input',
  templateUrl: './to-be-input.component.html',
  styleUrls: ['./to-be-input.component.css']
})
export class ToBeInputComponent implements OnInit {

  rehacer = false

  preg1: string=""
  preg2: string=""
  preg3: string=""
  preg4: string=""
  preg5: string=""
  preg6: string=""
  preg7: string=""
  preg8: string=""
  preg9: string=""
  preg10: string=""
  preg11: string=""
  preg12: string=""

  resp1: string = "is"
  resp2: string = "is"
  resp3: string = "are"
  resp4: string = "is"
  resp5: string = "am"
  resp6: string = "are"
  resp7: string = "is"
  resp8: string = "are"
  resp9: string = "are"
  resp10: string = "are"
  resp11: string = "is"
  resp12: string = "are"

  mostrarTodo= false

  val1: number = 0
  val2: number = 0
  val3: number = 0
  val4: number = 0
  val5: number = 0
  val6: number = 0
  val7: number = 0
  val8: number = 0
  val9: number = 0
  val10: number = 0
  val11: number = 0
  val12: number = 0

  show1= false
  show2= false
  show3= false
  show4= false
  show5= false
  show6= false
  show7= false
  show8= false
  show9= false
  show10= false
  show11 =false
  show12 =false

  constructor() { }

  ngOnInit(): void {
  }

  mostrarResp(){


    if(this.resp1 === this.preg1){
      this.val1+=1
      this.show1=true
    }
    if(this.resp2 === this.preg2){
      this.val2+=1
      this.show2=true
    }
    if(this.resp3 === this.preg3){
      this.val3+=1
      this.show3=true
    }
    if(this.resp4 === this.preg4){
      this.val4+=1
      this.show4=true
    }
    if(this.resp5 === this.preg5){
      this.val5+=1
      this.show5=true
    }
    if(this.resp6 === this.preg6){
      this.val6+=1
      this.show6=true
    }
    if(this.resp7 === this.preg7){
      this.val7+=1
      this.show7=true
    }
    if(this.resp8 === this.preg8){
      this.val8+=1
      this.show8=true
    }
    if(this.resp9 === this.preg9){
      this.val9+=1
      this.show9=true
    }
    if(this.resp10 === this.preg10){
      this.val10+=1
      this.show10=true
    }
    if(this.resp11 === this.preg11){
      this.val11+=1
      this.show11=true
    }
    if(this.resp12 === this.preg12){
      this.val12+=1
      this.show12=true
    }

    let total = this.val1 + this.val2 + this.val3 + this.val4 +
                this.val5 + this.val6 + this.val7 + this.val8 +
                this.val9 + this.val10 + this.val11 + this.val12

    this.mostrarTodo = true
    alert("Respondiste bien " + total + "/12")
    this.rehacer=true
  }

  redo(){
    this.preg1=""
    this.preg2=""
    this.preg3=""
    this.preg4=""
    this.preg5=""
    this.preg6=""
    this.preg7=""
    this.preg8=""
    this.preg9=""
    this.preg10=""
    this.preg11=""
    this.preg12=""

    this.val1=0
    this.val2=0
    this.val3=0
    this.val4=0
    this.val5=0
    this.val6=0
    this.val7=0
    this.val8=0
    this.val9=0
    this.val10=0
    this.val11=0
    this.val12=0

    this.mostrarTodo=false
    this.rehacer=false
  }

}
