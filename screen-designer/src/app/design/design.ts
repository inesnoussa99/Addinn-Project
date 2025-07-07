import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentPalette } from '../component-palette/component-palette';
import { DesignerCanvas } from '../designer-canvas/designer-canvas';
import { PropertiesPanel } from '../properties-panel/properties-panel';
import { UIelement } from '../uielement';
import { Router } from '@angular/router';
@Component({
  selector: 'app-design',
  imports: [RouterOutlet , DragDropModule , ComponentPalette , DesignerCanvas,PropertiesPanel],
  templateUrl: './design.html',
  styleUrl: './design.css'
})
export class Design {
  selectedElement: UIelement | null = null;

  onElementSelected(element: UIelement) {
      console.log('Element sélectionné :', element);
      this.selectedElement = element;
  }
}

