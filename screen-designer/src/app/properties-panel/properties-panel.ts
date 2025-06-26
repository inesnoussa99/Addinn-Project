import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionService } from '../selection';
import { UIelement } from '../uielement';

@Component({
  selector: 'app-properties-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-panel.html',
  styleUrls: ['./properties-panel.css']
})
export class PropertiesPanel {
  objectKeys = Object.keys;

  selectedElement: UIelement | null = null;

  constructor(private selectionService: SelectionService) {
    this.selectionService.selectedElement$.subscribe(elem => {
      this.selectedElement = elem;
    });
  }

  updateProperty(key: string, value: string) {
    if (this.selectedElement) {
      this.selectedElement.properties[key] = value;
    }
  }
  updatePropertyFromEvent(key: string, event: Event) {
  const input = event.target as HTMLInputElement;
  this.updateProperty(key, input.value);
}
}