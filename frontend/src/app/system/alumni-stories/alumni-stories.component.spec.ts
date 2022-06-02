import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniStoriesComponent } from './alumni-stories.component';

describe('AlumniStoriesComponent', () => {
  let component: AlumniStoriesComponent;
  let fixture: ComponentFixture<AlumniStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
