import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuckstersComponent } from './hucksters.component';

describe('HuckstersComponent', () => {
  let component: HuckstersComponent;
  let fixture: ComponentFixture<HuckstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuckstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuckstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
