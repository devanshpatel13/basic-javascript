import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-itemm',
  templateUrl: './todo-itemm.component.html',
  styleUrls: ['./todo-itemm.component.css']
})
export class TodoItemmComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i !: number ;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
  onClick(todo :Todo){
    this.todoDelete.emit(todo); 
    // console.log(todo)
    console.log("onClick has been triggered")
  }
  oncheckboxclick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}
