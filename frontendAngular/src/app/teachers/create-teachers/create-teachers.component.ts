import { Component, OnInit, Output, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

import { ServicesModule } from 'src/app/services/services.module';
import Teachers from '../teachers';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {
  @Input() createTemplate: any;
  teachers: Teachers[];
  teacher: Teachers;
  teacherValid: boolean = false;

  teachersForm: FormGroup;

  constructor(
    private service: ServicesModule,
    private fb: FormBuilder,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.teachersForm = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      rg: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.maxLength(11)
      ]),
      endereco: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ])
    });
  }

  salvarRegistro(template: any) {
    if (this.teachersForm.valid) {
      this.teacher = Object.assign({}, this.teachersForm.value);
      this.service.postTeachers(this.teacher).subscribe(
        (novoTeacher: Teachers) => {
          console.log(novoTeacher);
          this.modalService.hide(template);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  fecharModal() {}
}
