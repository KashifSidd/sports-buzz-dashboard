import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAnalysisComponent } from './expert-analysis.component';

describe('ExpertAnalysisComponent', () => {
  let component: ExpertAnalysisComponent;
  let fixture: ComponentFixture<ExpertAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
