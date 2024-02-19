import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCheckingPolicyComponent } from './fact-checking-policy.component';

describe('FactCheckingPolicyComponent', () => {
  let component: FactCheckingPolicyComponent;
  let fixture: ComponentFixture<FactCheckingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactCheckingPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactCheckingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
