import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasesTypeComponent } from './glases-type.component';

describe('GlasesTypeComponent', () => {
  let component: GlasesTypeComponent;
  let fixture: ComponentFixture<GlasesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlasesTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
