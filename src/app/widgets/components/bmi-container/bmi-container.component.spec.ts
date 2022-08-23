import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiContainerComponent } from './bmi-container.component';

describe('BmiContainerComponent', () => {
  let component: BmiContainerComponent;
  let fixture: ComponentFixture<BmiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
