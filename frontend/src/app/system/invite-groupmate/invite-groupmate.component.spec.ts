import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGroupmateComponent } from './invite-groupmate.component';

describe('InviteGroupmateComponent', () => {
  let component: InviteGroupmateComponent;
  let fixture: ComponentFixture<InviteGroupmateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteGroupmateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteGroupmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
