import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Classes } from './classes';
import { ServicesModule } from '../services/services.module';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes: Classes[];
  classe: Classes;

  classesForm: FormGroup;

  filtroLista: string;
  bodyDeletarClasses: string;

  constructor(
    private fb: FormBuilder,
    private services: ServicesModule
  ) { }

  ngOnInit() {
    this.listarClasses();
    this.validation();
  }

  validation () {
    this.classesForm = this.fb.group({
      serie: ['', [Validators.required, Validators.maxLength(20)]],
      turma: ['', [Validators.required, Validators.maxLength(20)]],
      turno: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  listarClasses() {
    this.services.getAllClasses().subscribe(
      (classes: Classes[]) => {
        this.classes = classes;
      }, error => {
        console.log(error);
      }
    )
  }

  openModal (template: any) {
    template.show();
  }

  novaClasse (template: any) {
    this.openModal(template);
  }

  editarClasses (classe: Classes, template: any) {
    template.show();
    this.classe = classe;
  }

  excluirClasses (classe: Classes, template: any) {

  }

  confirmeDelete(template: any) {
    template.show();
  }

  salvarRegistro(template: any) {

  }

}
