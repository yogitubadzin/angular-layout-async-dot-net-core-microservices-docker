import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNumbersComponent } from './counter-numbers.component';

describe('CounterNumbersComponent', () => {
  let component: CounterNumbersComponent;
  let fixture: ComponentFixture<CounterNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
