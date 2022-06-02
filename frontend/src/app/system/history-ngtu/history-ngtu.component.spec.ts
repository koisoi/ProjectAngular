import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNgtuComponent } from './history-ngtu.component';

describe('HistoryNgtuComponent', () => {
  let component: HistoryNgtuComponent;
  let fixture: ComponentFixture<HistoryNgtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryNgtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryNgtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
