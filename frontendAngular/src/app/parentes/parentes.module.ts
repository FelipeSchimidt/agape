import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';

import { ParentesComponent } from './parentes.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [ParentesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    BsDatepickerModule
  ],
  exports: [ParentesComponent],
  providers: [ServicesModule]
})
export class ParentesModule {}
