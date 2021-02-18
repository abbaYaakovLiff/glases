import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinelOrderComponent } from './finel-order.component';

describe('FinelOrderComponent', () => {
  let component: FinelOrderComponent;
  let fixture: ComponentFixture<FinelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinelOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
