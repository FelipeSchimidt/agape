import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers/teachers.component';
import { ClassesComponent } from './classes/classes.component';
import { AlunosComponent } from './alunos/alunos.component';

const APP_ROUTES: Routes = [
  { path: 'professor', component: TeachersComponent },
  { path: 'classe', component: ClassesComponent },
  { path: 'aluno', component: AlunosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
