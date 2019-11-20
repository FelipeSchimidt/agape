import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TeachersModule } from './teachers/teachers.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TeachersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
