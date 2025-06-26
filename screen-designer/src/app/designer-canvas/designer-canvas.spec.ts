import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerCanvas } from './designer-canvas';

describe('DesignerCanvas', () => {
  let component: DesignerCanvas;
  let fixture: ComponentFixture<DesignerCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerCanvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerCanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
