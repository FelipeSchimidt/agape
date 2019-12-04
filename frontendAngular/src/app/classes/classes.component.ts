import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Classes from './classes';
import Teachers from '../teachers/teachers';
import { ServicesModule } from '../services/services.module';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Classes[];
  classe: Classes;
  professores: Teachers[];

  classesForm: FormGroup;

  filtroLista: string;
  bodyDeletarClasse: string;
  modoSalvar = 'post';
  periodos: string[] = ['manhã', 'tarde'];

  constructor(private fb: FormBuilder, private services: ServicesModule) {}

  ngOnInit() {
    this.validation();
    this.getClasses();
    this.getProfessores();
  }

  validation() {
    this.classesForm = this.fb.group({
      serie: ['', [Validators.required, Validators.maxLength(20)]],
      turma: ['', [Validators.required, Validators.maxLength(20)]],
      turno: ['', [Validators.required, Validators.maxLength(20)]],
      professor_id: ['', [Validators.required]]
    });
  }

  getClasses() {
    this.services.getAllClasses().subscribe(response => {
      this.classes = response;
    });
  }

  getProfessores() {
    this.services.getAllTeachers().subscribe(
      response => {
        this.professores = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  openModal(template: any) {
    this.classesForm.reset();
    template.show();
  }

  novaClasse(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  editarClasses(classe: Classes, template: any) {
    this.modoSalvar = 'put';
    template.show();
    this.classe = classe;
    this.classesForm.patchValue(classe);
  }

  excluirClasses(classe: Classes, template: any) {
    this.openModal(template);
    this.classe = classe;
    this.bodyDeletarClasse = `Tem certeza que deseja excluir a CLasse: ${this.classe.serie}`;
  }

  confirmeDelete(template: any) {
    this.services.deleteClasses(this.classe.id).subscribe(
      () => {
        template.hide();
        this.getClasses();
      },
      error => console.log(error)
    );
  }

  salvarRegistro(template: any) {
    if (this.classesForm.valid) {
      if (this.modoSalvar === 'post') {
        this.classe = Object.assign({}, this.classesForm.value);
        this.services.postClasses(this.classe).subscribe(
          (classe: Classes) => {
            console.log(classe);
            template.hide();
            this.getClasses();
          },
          errors => {
            console.log(errors);
          }
        );
      } else {
        this.classe = Object.assign(
          { id: this.classe.id },
          this.classesForm.value
        );
        this.services.putClasses(this.classe).subscribe(
          (novaClasse: Classes) => {
            console.log(novaClasse);
            template.hide();
            this.getClasses();
          },
          errors => {
            console.log(errors);
          }
        );
      }
    }
  }
}
