import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRequestedComponent } from './not-requested.component';

describe('NotRequestedComponent', () => {
  let component: NotRequestedComponent;
  let fixture: ComponentFixture<NotRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotRequestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
