import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodotodoComponent } from './todotodo/todotodo.component';

const routes: Routes = [
  {
    path: '', component: TodotodoComponent
    
  }, 
  {
    path: 'Todo', component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
