import { Component , Output , EventEmitter} from '@angular/core';
import { UIelement } from '../uielement';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { GridStack } from 'gridstack';
import { UiElement } from '../ui-element/ui-element';
import interact from 'interactjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-palette',
  imports: [CommonModule, DragDropModule,UiElement, FormsModule],
  templateUrl: './component-palette.html',
  styleUrl: './component-palette.css'
})
export class ComponentPalette {

  ngAfterViewInit(): void {
  interact('.palette-item').draggable({
    inertia: true,
    autoScroll: true,
    onmove: event => {
      // Optionnel: pour feedback visuel ou debug
      // console.log('Dragging', event);
    },
    onend: event => {
      // Optionnel: log fin de drag
      // console.log('Drag ended', event);
    }
  });
}

  components : UIelement[] = [
  { id: 'btn1', type: 'button', properties: { label: 'Clique moi' } },
  { id: 'input1', type: 'input', properties: { placeholder: 'Tape ici...' } },
  { id: 'textarea1', type: 'textarea', properties: { placeholder: 'Texte long...' } },
  { id: 'select1', type: 'select', properties: { options: ['Option A', 'Option B', 'Option C'] } },
  { id: 'checkbox1', type: 'checkbox', properties: { label: 'J’accepte les conditions' } },
  { id: 'label1', type: 'label', properties: { text: 'Un petit texte sympa' } },
  { id: 'image1', type: 'image', properties: { src: 'https://via.placeholder.com/100x50' } },
  { id: 'divider1', type: 'divider', properties: {} },
  { id: 'container1', type: 'container', properties: { backgroundColor: '#eee', padding: '10px' } }
];
getIcon(type: string): string {
  const icons: { [key: string]: string } = {
    button: '🔘',
    input: '⌨️',
    textarea: '📝',
    select: '⬇️',
    checkbox: '☑️',
    label: '🏷️',
    image: '🖼️',
    divider: '➖',
    container: '📦'
  };
  return icons[type] || '❔';
}
toJson(comp: any) {
  return JSON.stringify(comp);
}
elementTypes = ['button', 'input', 'textarea', 'select', 'checkbox', 'label', 'image', 'divider', 'container'];
selectedType: string | null = null;

addCard() {
  if (!this.selectedType) {
    alert('Veuillez sélectionner un type avant d\'ajouter une carte.');
    return;
  }

  const id = this.selectedType + Date.now();
  let properties: { [key: string]: any } = {};

  switch (this.selectedType) {
    case 'button':
      properties = { label: 'Nouveau Bouton' };
      break;
    case 'input':
      properties = { placeholder: 'Votre texte ici...' };
      break;
    case 'textarea':
      properties = { placeholder: 'Votre texte long ici...' };
      break;
    case 'select':
      properties = { options: ['Option 1', 'Option 2'] };
      break;
    case 'checkbox':
      properties = { label: 'Case à cocher' };
      break;
    case 'label':
      properties = { text: 'Texte affiché' };
      break;
    case 'image':
      properties = { src: 'https://via.placeholder.com/150' };
      break;
    case 'divider':
      properties = {};
      break;
    case 'container':
      properties = { backgroundColor: '#f0f0f0', padding: '10px' };
      break;
  }

  const newCard: UIelement = {
    id,
    type: this.selectedType as UIelement['type'],
    properties
  };

  this.components.push(newCard);
  console.log('Nouvelle carte ajoutée :', newCard);

  this.selectedType = null; // reset après ajout
}

@Output() select = new EventEmitter<UIelement>();
selectComponent(comp: UIelement) {
    this.select.emit(comp);
}

}
