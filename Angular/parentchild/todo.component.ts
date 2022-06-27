import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() hero: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'Todo List';

  list:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }

  updateStatus(item:string,i:number)
  {
    this.list[i].name = item
    console.warn(item,i)
  }
}
