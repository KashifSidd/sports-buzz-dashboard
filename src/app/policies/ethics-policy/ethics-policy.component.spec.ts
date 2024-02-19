import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsPolicyComponent } from './ethics-policy.component';

describe('EthicsPolicyComponent', () => {
  let component: EthicsPolicyComponent;
  let fixture: ComponentFixture<EthicsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicsPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
