import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrstdComponent } from './rrstd.component';

describe('RrstdComponent', () => {
  let component: RrstdComponent;
  let fixture: ComponentFixture<RrstdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrstdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
