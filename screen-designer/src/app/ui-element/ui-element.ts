import { Component, Input , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIelement } from '../uielement';

// Output et EventEmitter pour émettre des événements au parent lorsque quelque chose se produit dans ce composant.
@Component({
  selector: 'app-ui-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-element.html',
  styleUrls: ['./ui-element.css']
})
export class UiElement {
  @Input() data!: UIelement; 
  //Cela signifie que le composant parent peut fournir des données à ce composant via une propriété [data]="...".
  //Le type est UIelement et le ! indique à TypeScript que tu garantis que data sera initialisé avant utilisation.
  @Output() clicked = new EventEmitter<UIelement>();
  onClick() {
    console.log ("test de click ok") ; 
    console.log('Click sur un UIElement :', this.data); 
    this.clicked.emit(this.data);
  }
}