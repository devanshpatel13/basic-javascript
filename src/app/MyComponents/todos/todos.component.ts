import { compileDeclareClassMetadata, compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { concatAll } from 'rxjs';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem : string | null
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todo");
    if(this.localItem == null){
    this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
   } 

  ngOnInit(): void {
  }
  
  deleteTodo(todo:Todo){

    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todo",JSON.stringify(this.todos));

  }
  addTodo(todo:Todo){

    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todo",JSON.stringify(this.todos));


  }
  toggleTodo(todo:Todo){

    const index =this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todo",JSON.stringify(this.todos));


  }
}
