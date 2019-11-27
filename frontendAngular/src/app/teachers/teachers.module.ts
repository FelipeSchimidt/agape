import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { TeachersComponent } from './teachers.component';
import { ServicesModule } from '../services/services.module';
import { CreateTeachersComponent } from './create-teachers/create-teachers.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ListTeachersComponent,
    TeachersComponent,
    CreateTeachersComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  exports: [TeachersComponent],
  providers: [ServicesModule]
})
export class TeachersModule {}
