import { Component, Input } from '@angular/core';
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
}