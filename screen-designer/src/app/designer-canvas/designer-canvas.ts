import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { UIelement } from '../uielement'; // <-- ton interface
import { UiElement } from '../ui-element/ui-element';

@Component({
  selector: 'app-designer-canvas',
  standalone: true,
  imports: [CommonModule, DragDropModule, UiElement],
  templateUrl: './designer-canvas.html',
  styleUrls: ['./designer-canvas.css']
})
export class DesignerCanvasComponent {
  droppedElements: UIelement[] = [];

  onDrop(event: CdkDragDrop<any>) {
    console.log('[DROP] Drop déclenché !');
    const droppedData = event.item.data;

    if (!droppedData) {
      console.warn('[DROP] Aucun data reçu');
      return;
    }

    const newElement: UIelement = {
      ...droppedData,
      id: Date.now().toString(),
      properties: JSON.parse(JSON.stringify(droppedData.properties || {}))
    };

    this.droppedElements.push(newElement);
    console.log('[DROP] Élément ajouté :', newElement);
  }

  selectElement(elem: UIelement) {
    console.log('[CANVAS] Élément sélectionné :', elem);
    // TODO: appel au SelectionService
  }
}
