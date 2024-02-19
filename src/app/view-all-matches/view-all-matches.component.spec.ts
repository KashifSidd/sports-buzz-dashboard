import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMatchesComponent } from './view-all-matches.component';

describe('ViewAllMatchesComponent', () => {
  let component: ViewAllMatchesComponent;
  let fixture: ComponentFixture<ViewAllMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
