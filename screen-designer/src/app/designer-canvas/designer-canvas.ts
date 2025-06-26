import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { UIelement } from '../uielement';
import { CommonModule } from '@angular/common';
import { UiElement } from '../ui-element/ui-element';
import { SelectionService } from '../selection';


@Component({
  selector: 'app-designer-canvas',
  imports :[CommonModule, DragDropModule, UiElement ] , 
  templateUrl: './designer-canvas.html',
  styleUrls: ['./designer-canvas.css']
})
export class DesignerCanvasComponent {
  constructor(private selectionService: SelectionService) {}

  selectElement(elem: UIelement) {
    console.log("sélectionne: ", elem)  ;
    this.selectionService.select(elem);
  }
  droppedElements: UIelement[] = [];
    onDrop(event: CdkDragDrop<any>) {
    // Cloner l'élément au lieu de le déplacer
    const clone: UIelement = {
      ...event.item.data,
      id: Date.now().toString() // Assure un ID unique
    };

    this.droppedElements.push(clone);
  }
  
}
