import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeachersModule } from './teachers/teachers.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassesModule } from './classes/classes.module';
import { AlunosModule } from './alunos/alunos.module';

import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TeachersModule,
    ClassesModule,
    AlunosModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
