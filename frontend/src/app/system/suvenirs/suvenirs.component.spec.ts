import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvenirsComponent } from './suvenirs.component';

describe('SuvenirsComponent', () => {
  let component: SuvenirsComponent;
  let fixture: ComponentFixture<SuvenirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvenirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
