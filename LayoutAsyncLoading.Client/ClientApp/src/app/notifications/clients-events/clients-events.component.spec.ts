import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsEventsComponent } from './clients-events.component';

describe('ClientsEventsComponent', () => {
  let component: ClientsEventsComponent;
  let fixture: ComponentFixture<ClientsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
