import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteForUsComponent } from './write-for-us.component';

describe('WriteForUsComponent', () => {
  let component: WriteForUsComponent;
  let fixture: ComponentFixture<WriteForUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteForUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteForUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
