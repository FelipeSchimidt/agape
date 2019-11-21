import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {
  teachers: any;

  modalRef: BsModalRef;

  constructor(private http: HttpClient, private modalService: BsModalService) {}

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.http.get('http://localhost:3333/professor').subscribe(
      response => {
        console.log(response);
        this.teachers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
