import { Component, Input , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIelement } from '../uielement';

@Component({
  selector: 'app-ui-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-element.html',
  styleUrls: ['./ui-element.css']
})
export class UiElement {
  @Input() data!: UIelement;
   @Output() clicked = new EventEmitter<UIelement>();
  onClick() {
    console.log ("test de clcik ok") ; 
    console.log('Click sur un UIElement :', this.data); 
    this.clicked.emit(this.data);
  }
}