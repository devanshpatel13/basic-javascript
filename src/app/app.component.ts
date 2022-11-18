import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
// import { throwIfEmpty } from 'rxjs';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  data : any= []
  constructor(private user : UserService){
    
    // console.log(this.user)
    this.user.getData().subscribe(data =>{ 
    console.warn(data)
    this.data= data
    console.log(data)
    })
  
    // setTimeout(() => {

    //   this.title = "Changed title"
    // }, 2000);
  }
  
}
