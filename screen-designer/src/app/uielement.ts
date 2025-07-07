export interface UIelement {

  id: string;
  type: 'button' | 'input' | 'image'| 'textarea'| 'select'| 'checkbox' | 'label' | 'divider' | 'container'   ;
  properties: { [key: string]: any };
}

