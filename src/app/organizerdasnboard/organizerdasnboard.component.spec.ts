import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerdasnboardComponent } from './organizerdasnboard.component';

describe('OrganizerdasnboardComponent', () => {
  let component: OrganizerdasnboardComponent;
  let fixture: ComponentFixture<OrganizerdasnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerdasnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerdasnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
