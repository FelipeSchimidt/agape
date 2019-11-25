import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServicesModule } from 'src/app/services/services.module';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {
  teachers: any;

  teachersForm: FormGroup;

  constructor(private service: ServicesModule, private fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.teachersForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.max(11)]],
      rg: ['', [Validators.required, Validators.max(10)]],
      telefone: ['', [Validators.required, Validators.max(12)]],
      endereco: []
    });
  }
}
