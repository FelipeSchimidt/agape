import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  @Input() template: any;

  constructor() {}

  ngOnInit() {}
}
