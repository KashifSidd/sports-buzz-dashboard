import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassComponent } from './master-class.component';

describe('MasterClassComponent', () => {
  let component: MasterClassComponent;
  let fixture: ComponentFixture<MasterClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
