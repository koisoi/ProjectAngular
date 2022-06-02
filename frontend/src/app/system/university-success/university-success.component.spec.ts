import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySuccessComponent } from './university-success.component';

describe('UniversitySuccessComponent', () => {
  let component: UniversitySuccessComponent;
  let fixture: ComponentFixture<UniversitySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitySuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
