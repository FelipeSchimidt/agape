import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {

  teachersForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

}
