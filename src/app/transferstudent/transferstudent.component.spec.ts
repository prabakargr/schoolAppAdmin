import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferstudentComponent } from './transferstudent.component';

describe('TransferstudentComponent', () => {
  let component: TransferstudentComponent;
  let fixture: ComponentFixture<TransferstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
