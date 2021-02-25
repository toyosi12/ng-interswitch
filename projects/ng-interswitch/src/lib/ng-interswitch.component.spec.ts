import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInterswitchComponent } from './ng-interswitch.component';

describe('NgInterswitchComponent', () => {
  let component: NgInterswitchComponent;
  let fixture: ComponentFixture<NgInterswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgInterswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInterswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
