import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [AlunosComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AlunosComponent],
  providers: [ServicesModule]
})
export class AlunosModule {}
