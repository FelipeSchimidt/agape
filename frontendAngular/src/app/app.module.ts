import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeachersModule } from './teachers/teachers.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassesComponent } from './classes/classes.component';
import { routing } from './app.routing';
import { ClassesModule } from './classes/classes.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TeachersModule,
    ClassesModule,
    ModalModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
