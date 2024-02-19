import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IccRankingsGenderComponent } from './icc-rankings-gender.component';

describe('IccRankingsGenderComponent', () => {
  let component: IccRankingsGenderComponent;
  let fixture: ComponentFixture<IccRankingsGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IccRankingsGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IccRankingsGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
