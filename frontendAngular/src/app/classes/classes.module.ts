import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { ClassesComponent } from './classes.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  exports: [
    ClassesComponent
  ],
  providers: [
    ServicesModule
  ]
})
export class ClassesModule { }
