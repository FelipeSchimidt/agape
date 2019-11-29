import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Teachers from '../teachers/teachers';
import { Classes } from '../classes/classes';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ServicesModule {
  baseURL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(`${this.baseURL}/professor`);
  }

  postTeachers(teacher: Teachers) {
    return this.http.post<Teachers>(`${this.baseURL}/professor`, teacher);
  }

  putTeachers(teacher: Teachers) {
    return this.http.put<Teachers>(
      `${this.baseURL}/professor/${teacher.id}`,
      teacher
    );
  }

  deleteTeachers(id: number) {
    return this.http.delete(`${this.baseURL}/professor/${id}`);
  }

  getAllClasses(): Observable<Classeses[]> {
    return this.http.get<Classes[]> (`${this.baseURL}/classes`);
  }
}
