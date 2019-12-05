import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServicesModule } from '../services/services.module';

import Alunos from './alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Alunos[];

  filtroLista: string;

  alunosForm: FormGroup;

  constructor(private services: ServicesModule, private fb: FormBuilder) {}

  ngOnInit() {
    this.getAlunos();
    this.validation();
  }

  validation() {
    this.alunosForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ]
      ],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      rg: ['', [Validators.required, Validators.maxLength(11)]],
      certicao_nascimento: [
        '',
        [Validators.required, Validators.maxLength(12)]
      ],
      nascimento: ['', [Validators.required]],
      observacao: ['']
    });
  }

  getAlunos() {
    this.services.getAllAlunos().subscribe(
      response => {
        this.alunos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  openModal(template: any) {
    this.alunosForm.reset();
    template.show();
  }

  novoAluno(template: any) {}
}
