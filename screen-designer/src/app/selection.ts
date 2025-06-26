import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UIelement } from './uielement';

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private selectedElementSubject = new BehaviorSubject<UIelement | null>(null);
  selectedElement$ = this.selectedElementSubject.asObservable();

  select(element: UIelement) {
    this.selectedElementSubject.next(element);
  }

  clear() {
    this.selectedElementSubject.next(null);
  }
}