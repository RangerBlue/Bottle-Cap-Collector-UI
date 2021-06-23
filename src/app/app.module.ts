import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapsComponent } from './caps/caps.component';
import { FormsModule } from '@angular/forms';
import { CapDetailComponent } from './cap-detail/cap-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CapsComponent,
    CapDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
