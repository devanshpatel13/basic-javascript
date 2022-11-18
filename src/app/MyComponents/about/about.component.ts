import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  // templateUrl: './/about.component.html',
  template : `
<!-- //   <h2>
//     welcome {{name}}
//   </h2> -->
  <!-- <h2><div [style.color]="hasError ? 'red':'green'"> style binding </div></h2>
//   <h2><div [style.color]="highilightcolor"> style binding 2 </div></h2>
//   <h2><div [ngStyle]="titlestyle"> style binding 3 </div></h2> -->
   <!-- <button (click)="onClick($event)">Greet</button> -->
   <!-- {{greeting}} -->
   <!-- <input  #myInput type="text">
//   <button (click)="logmessage(myInput.value)"> log </button> -->
   <!-- <input [(ngModel)] = "name" type="text">
//   {{name}} -->

   <!-- <h2 *ngIf="displayname; else elseBlock"> {{name}}</h2>

//   <ng-template #elseBlock>
//   <h2> Name is Devansh</h2>
//   </ng-template> -->

   <!-- <div *ngIf="displayname; then thenBlock; else elseBlock"></div>

//   <ng-template #thenBlock>
//   <h2> Name is then block</h2>

//   </ng-template> <ng-template #elseBlock>
//   <h2> Name is else block</h2>
//   </ng-template> -->

   <!-- / ngSwitch 
//   <div [ngSwitch] = "color">
//     <div *ngSwitchCase="'red'"> You picked red color </div>
//     <div *ngSwitchCase="'blue'"> You picked blue color </div>
//     <div *ngSwitchCase="'green'"> You picked green color </div>
//     <div *ngSwitchDefault> Pick agnain................!</div>
  
//   </div>
//   \ -->
   <!-- <div *ngFor="let color of colors; index as i">
//     <h2>{{i}} {{color}}</h2>
//   </div> -->




<!-- Pipe  -->
<!-- <h2>{{name}}</h2>
<h2>{{  name | lowercase}}</h2>
<h2>{{  name | uppercase}}</h2>
<h2>{{  message | titlecase}}</h2>
<h2>{{  person | json }}</h2>

<h2>{{5.678 | number: '1.2-3'}}</h2>
<h2>{{5.678 | number: '3.4-5'}}</h2>
<h2>{{5.678 | number: '3.1-3'}}</h2>


<h2>{{ 0.25 | percent }}</h2>
<h2>{{ 0.25 | currency }}</h2>
<h2>{{ 0.25 | currency: 'EUR':'code' }}</h2>

<h2>{{date}}</h2>
<h2>{{ date | date :'short'}}</h2>
<h2>{{ date | date :'shortDate'}}</h2>
<h2>{{ date | date :'shortTime'}}</h2> -->

<h2>Employee List</h2>
<ul *ngFor="let employee of employees">
  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
</ul>


`,


  styleUrls: ['./about.component.css']
  // styles :[]
})
export class AboutComponent implements OnInit {


  employees = [
    {"id": 1, "name": "raj", "age":30},
    {"id": 2, "name": "jay", "age":22},
    {"id": 3, "name": "sahil", "age":44},
    {"id": 4, "name": "rai", "age":23},


  ]


  // title = "app";
  // name = "Devansh";
  // message = "Welcome to the this page";
  // person = {
  //   "firstname":"john",
  //   "lastname":"Doe"
  // }
  // date = new Date();
  // colors = ["red", "blue", "green", "yellow"];
  // color = "ccc";
  // name = "Devansh";
  // displayname = true;
  // greeting = ""
  // hasError = true;
  // isSpecial = true;
  // highilightcolor = "orange";
  // titlestyle = {
  //   color :"blue",
  //   fontStyle : ";italic"
  // }

  constructor() { }

  ngOnInit(): void {
  }
  // onClick(event: any ){
  //   console.log(event)
  //   this.greeting = "welcome to the about page"
  // }
  // logmessage(value : any){
  //   console.log(value)
  // }


}
