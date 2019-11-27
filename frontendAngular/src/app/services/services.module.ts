import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Teachers from '../teachers/teachers';

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

  /* postTeachers() {
    this.http.post(`${this.baseURL}/professor`, body, options)
  } */
}
