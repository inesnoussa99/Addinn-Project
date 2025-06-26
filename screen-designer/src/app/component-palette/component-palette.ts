import { Component } from '@angular/core';
import { UIelement } from '../uielement';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-palette',
  imports: [CommonModule, DragDropModule],
  templateUrl: './component-palette.html',
  styleUrl: './component-palette.css'
})
export class ComponentPalette {
  components = [
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


}
