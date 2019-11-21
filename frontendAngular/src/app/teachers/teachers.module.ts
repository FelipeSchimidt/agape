import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { TeachersComponent } from './teachers.component';
import { ServicesModule } from '../services/services.module';
import { CreateTeachersComponent } from './create-teachers/create-teachers.component';

@NgModule({
  declarations: [
    ListTeachersComponent,
    TeachersComponent,
    CreateTeachersComponent
  ],
  imports: [CommonModule],
  exports: [TeachersComponent],
  providers: [ServicesModule]
})
export class TeachersModule {}
