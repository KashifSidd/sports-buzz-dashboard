import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialStandardComponent } from './editorial-standard.component';

describe('EditorialStandardComponent', () => {
  let component: EditorialStandardComponent;
  let fixture: ComponentFixture<EditorialStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
