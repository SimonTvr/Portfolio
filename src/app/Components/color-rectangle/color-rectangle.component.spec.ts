import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRectangleComponent } from './color-rectangle.component';

describe('ColorRectangleComponent', () => {
  let component: ColorRectangleComponent;
  let fixture: ComponentFixture<ColorRectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorRectangleComponent]
    });
    fixture = TestBed.createComponent(ColorRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
