import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  teachers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers(){
    this.http.get('http://localhost:3333/professor').subscribe(response => {
      console.log(response);
      this.teachers = response;
    }, error => {
      console.log(error);
    })
  }

}
