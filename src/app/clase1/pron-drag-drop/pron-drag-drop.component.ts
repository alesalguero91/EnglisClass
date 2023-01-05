import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pron-drag-drop',
  templateUrl: './pron-drag-drop.component.html',
  styleUrls: ['./pron-drag-drop.component.css']
})
export class PronDragDropComponent implements OnInit {

  listasDePron:string[]= ['He', 'You', 'It', 'We', 'She', 'They', 'I']


  opt1:string[]=[]
  opt2:string[]=[]
  opt3:string[]=[]
  opt4:string[]=[]
  opt5:string[]=[]
  opt6:string[]=[]
  opt7:string[]=[]

  total : number = 0

  res1:number = 0
  res2:number = 0
  res3:number = 0
  res4:number = 0
  res5:number = 0
  res6:number = 0
  res7:number = 0

  correct1:string="I"
  correct2:string="You"
  correct3:string="He"
  correct4:string="She"
  correct5:string="It"
  correct6:string="We"
  correct7:string="They"

  msj1=false
  msj2=false
  msj3=false
  msj4=false
  msj5=false
  msj6=false
  msj7=false

  mostrar = false


  constructor() { }

  ngOnInit(): void {
  }

  drop($event: CdkDragDrop<string[]>){
    if($event.previousContainer===$event.container){
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    }else{
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    }
  }



  verRespuestas(total,res1,res2,res3,res4,res5,res6,res7){

    let pretotal =0

    if(this.opt1[0]=== this.correct1){
      res1 += 1
      this.msj1 = true
    }
    if(this.opt2[0]=== this.correct2){
      res2 += 1
      this.msj2 = true
    }
    if(this.opt3[0]=== this.correct3){
      res3 += 1
      this.msj3 = true
    }
    if(this.opt4[0]=== this.correct4){
      res4 += 1
      this.msj4 = true
    }
    if(this.opt5[0]=== this.correct5){
      res5 += 1
      this.msj5 = true
    }
    if(this.opt6[0]=== this.correct6){
      res6 += 1
      this.msj6 = true
    }
    if(this.opt7[0]=== this.correct7){
      res7 += 1
      this.msj7 = true

    } if(!this.mostrar){
      this.mostrar=true
    }

    pretotal=(res1 + res2 + res3 + res4 + res5 + res6 + res7)

    alert('Su puntuacion es: ' + pretotal + '/7.')
  }

}
