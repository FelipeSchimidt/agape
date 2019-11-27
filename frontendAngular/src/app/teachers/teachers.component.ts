import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';

import { ServicesModule } from '../services/services.module';
import Teachers from './teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  @Input() template: any;

  teachers: Teachers[];
  teacher: Teachers;

  modoSalvar = 'post';

  listTemplates: any;
  modalRef: BsModalRef;
  teachersForm: FormGroup;

  filtroLista: string;

  constructor(private services: ServicesModule, private fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
    this.getTeachers();
  }

  openModal(template: any) {
    this.teachersForm.reset();
    template.show();
  }

  getTeachers() {
    this.services.getAllTeachers().subscribe(
      response => {
        console.log(response);
        this.teachers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  validation() {
    this.teachersForm = this.fb.group({
      nome: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      rg: ['', [Validators.required, Validators.maxLength(10)]],
      telefone: ['', [Validators.required, Validators.maxLength(11)]],
      endereco: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  novoFuncionario(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  editarFuncionario(teacher: Teachers, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.teacher = teacher;
    this.teachersForm.patchValue(teacher);
  }

  salvarRegistro(template: any) {
    if (this.teachersForm.valid) {
      if (this.modoSalvar === 'post') {
        this.teacher = Object.assign({}, this.teachersForm.value);
        this.services.postTeachers(this.teacher).subscribe(
          (novoTeacher: Teachers) => {
            console.log(novoTeacher);
            template.hide();
            this.getTeachers();
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.teacher = Object.assign({}, this.teachersForm.value);
        this.services.putTeachers(this.teacher).subscribe(
          (novoTeacher: Teachers) => {
            console.log(novoTeacher);
            template.hide();
            this.getTeachers();
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}
