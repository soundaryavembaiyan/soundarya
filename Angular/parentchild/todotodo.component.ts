import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todotodo',
  templateUrl: './todotodo.component.html',
  styleUrls: ['./todotodo.component.css']
})

export class TodotodoComponent implements OnInit {

  title='blog';  
  data="Todo List is hereeeeeeeeeee"
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
