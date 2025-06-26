import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElement } from './ui-element';

describe('UiElement', () => {
  let component: UiElement;
  let fixture: ComponentFixture<UiElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
