import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ParentesModule } from './parentes/parentes.module';

import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TeachersModule,
    ClassesModule,
    AlunosModule,
    ParentesModule,
    routing,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
