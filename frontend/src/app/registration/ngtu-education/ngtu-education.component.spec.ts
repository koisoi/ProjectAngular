import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtuEducationComponent } from './ngtu-education.component';

describe('NgtuEducationComponent', () => {
  let component: NgtuEducationComponent;
  let fixture: ComponentFixture<NgtuEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtuEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtuEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
