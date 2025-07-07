import { AfterViewInit, Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { UIelement } from '../uielement'; // <-- ton interface
import { UiElement } from '../ui-element/ui-element';
import { GridStack } from 'gridstack';


@Component({
  selector: 'app-designer-canvas',
  standalone: true,
  imports: [CommonModule, DragDropModule, UiElement],
  templateUrl: './designer-canvas.html',
  styleUrls: ['./designer-canvas.css']
})
export class DesignerCanvas implements AfterViewInit {
  @ViewChild('gridContainer', { static: true }) gridContainer!: ElementRef;
  grid!: GridStack;
  droppedElements: UIelement[] = [];
  @Output() selectElement = new EventEmitter<UIelement>();
  
 ngAfterViewInit(): void {
  setTimeout(() => {
    this.grid = GridStack.init({
      float: true,
      cellHeight: 80,
      acceptWidgets: true
    }, this.gridContainer.nativeElement);
  }, 0);
}


 onDrop(event: CdkDragDrop<any>) {
  const comp: UIelement = event.item.data;
  const id = comp.id + '-' + Date.now();

  // ⚡️ Créer un élément DOM manuellement
  const wrapper = document.createElement('div');
  wrapper.classList.add('grid-stack-item');
  wrapper.setAttribute('gs-w', '2');
  wrapper.setAttribute('gs-h', '2');

  const content = document.createElement('div');
  content.classList.add('grid-stack-item-content');
  content.style.background = '#ddd';
  content.style.display = 'flex';
  content.style.alignItems = 'center';
  content.style.justifyContent = 'center';
  content.style.fontWeight = 'bold';
  content.innerText = comp.type.toUpperCase();

  wrapper.appendChild(content);

  // ⚡️ Ajouter l'élément DOM dans GridStack
  this.grid.makeWidget(wrapper);
  this.grid.el.appendChild(wrapper);

  // ⚡️ Stocker dans droppedElements
  this.droppedElements.push({
    ...comp,
    id: id,
  });

  // ⚡️ Permettre la sélection
  wrapper.addEventListener('click', () => {
    this.selectElement.emit(comp);
  });

  console.log('Élément ajouté manuellement dans GridStack', comp);
}


downloadEJSFile(content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'canvas-export.ejs';
  link.click();
  window.URL.revokeObjectURL(url);
}
  exportToEJS() {
  let ejsContent = '';

  for (const element of this.droppedElements) {
    switch (element.type) {
      case 'button':
        ejsContent += `<button>${element.properties['label']}</button>\n`;
        break;
      case 'input':
        ejsContent += `<input placeholder="${element.properties['placeholder']}" />\n`;
        break;
      case 'textarea':
        ejsContent += `<textarea placeholder="${element.properties['placeholder']}"></textarea>\n`;
        break;
      case 'select':
        ejsContent += `<select>\n`;
        for (const opt of element.properties['options'] || []) {
          ejsContent += `  <option>${opt}</option>\n`;
        }
        ejsContent += `</select>\n`;
        break;
      case 'checkbox':
        ejsContent += `<label><input type="checkbox" /> ${element.properties['label']}</label>\n`;
        break;
      case 'label':
        ejsContent += `<span>${element.properties['text']}</span>\n`;
        break;
      case 'image':
        ejsContent += `<img src="${element.properties['src']}" />\n`;
        break;
      case 'divider':
        ejsContent += `<hr />\n`;
        break;
      case 'container':
        const bg = element.properties['backgroundColor'] || '#fff';
        const padding = element.properties['padding'] || '0';
        ejsContent += `<div style="background-color:${bg}; padding:${padding};">\n  <!-- container -->\n</div>\n`;
        break;
    }
  }

  console.log('EJS export :\n', ejsContent);
  this.downloadEJSFile(ejsContent);
}

}
