import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { TeachersComponent } from './teachers.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    ListTeachersComponent,
    TeachersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeachersComponent
  ],
  providers: [
    ServicesModule
  ]
})
export class TeachersModule { }
