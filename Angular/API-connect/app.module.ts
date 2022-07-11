import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass:'toast-bottom-center',
      maxOpened:4,
      onActivateTick:true,
      preventDuplicates:true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }