import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPalette } from './component-palette';

describe('ComponentPalette', () => {
  let component: ComponentPalette;
  let fixture: ComponentFixture<ComponentPalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPalette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
