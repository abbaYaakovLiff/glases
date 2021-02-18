import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensesTypeComponent } from './lenses-type.component';

describe('LensesTypeComponent', () => {
  let component: LensesTypeComponent;
  let fixture: ComponentFixture<LensesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LensesTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LensesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
