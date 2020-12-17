import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsVisitsComponent } from './clients-visits.component';

describe('ClientsVisitsComponent', () => {
  let component: ClientsVisitsComponent;
  let fixture: ComponentFixture<ClientsVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
