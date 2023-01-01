import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {


  public listNumber1;
  public listNumber2;


  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  usuario:any={
    sexo:"",
    acepta:false,
    pais:""
  }

  paises = [
    {
      codigo: 'NIC',
      nombre: 'Nicaragua'
    },
    {
      codigo:'ARG',
      nombre: 'Argentina'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    /*this.listNumber1=[]
    this.listNumber2=[]

    for (let index = 1; index <= 10; index ++) {
      this.listNumber1.push(index)
    }

    for (let index = 10; index <= 20; index++) {
      this.listNumber2.push(index)
    }*/

  }

  /*drop($event: CdkDragDrop<number[]>){
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


  }*/
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
