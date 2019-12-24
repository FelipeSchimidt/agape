import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Parentes from './parentes';
import { ServicesModule } from '../services/services.module';

@Component({
  selector: 'app-parentes',
  templateUrl: './parentes.component.html',
  styleUrls: ['./parentes.component.css']
})
export class ParentesComponent implements OnInit {
  parentes: Parentes[];
  parente: Parentes;

  parenteForm: FormGroup;

  modoSalvar = 'post';
  filtroLista: string;
  tipoParentes: string[] = ['pai', 'mãe', 'avos', 'tios', 'primos'];

  constructor(private services: ServicesModule, private fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
    this.getParentes();
  }

  validation() {
    this.parenteForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ]
      ],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      rg: ['', [Validators.required, Validators.maxLength(15)]],
      nascimento: ['', [Validators.required]],
      tipo: [''],
      responsavel_financeiro: [''],
      telefone: [''],
      endereco: ['']
    });
  }

  getParentes() {
    this.services.getAllParentes().subscribe(
      response => {
        this.parentes = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  openModal(template: any) {
    template.show();
  }
}
