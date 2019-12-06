import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentesComponent } from './parentes.component';

describe('ParentesComponent', () => {
  let component: ParentesComponent;
  let fixture: ComponentFixture<ParentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
