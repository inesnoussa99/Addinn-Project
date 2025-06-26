export interface UIelement {

  id: string;
  type: 'button' | 'input' | 'image';
  properties: { [key: string]: any };
}

