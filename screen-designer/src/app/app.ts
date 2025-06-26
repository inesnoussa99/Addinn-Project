import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentPalette } from './component-palette/component-palette';
import { DesignerCanvasComponent } from './designer-canvas/designer-canvas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , DragDropModule , ComponentPalette , DesignerCanvasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'screen-designer';
}

