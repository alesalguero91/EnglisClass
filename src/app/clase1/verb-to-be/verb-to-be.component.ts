import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verb-to-be',
  templateUrl: './verb-to-be.component.html',
  styleUrls: ['./verb-to-be.component.css']
})
export class VerbToBeComponent implements OnInit {

  todo: string[]=[ "hacer la comida","lavar los platos", "lavar el auto"]
  progress: string[]=[]
  done:string[]=[]


  constructor() { }

  ngOnInit(): void {
  }

  /*drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }*/
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

}
