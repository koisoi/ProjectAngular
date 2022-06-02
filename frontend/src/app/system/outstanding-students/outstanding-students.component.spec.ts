import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingStudentsComponent } from './outstanding-students.component';

describe('OutstandingStudentsComponent', () => {
  let component: OutstandingStudentsComponent;
  let fixture: ComponentFixture<OutstandingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
