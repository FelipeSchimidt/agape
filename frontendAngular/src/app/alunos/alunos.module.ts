import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';

import { AlunosComponent } from './alunos.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    BsDatepickerModule
  ],
  exports: [AlunosComponent],
  providers: [ServicesModule]
})
export class AlunosModule {}
