import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionsPolicyComponent } from './corrections-policy.component';

describe('CorrectionsPolicyComponent', () => {
  let component: CorrectionsPolicyComponent;
  let fixture: ComponentFixture<CorrectionsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionsPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
