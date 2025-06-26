import { TestBed } from '@angular/core/testing';

import { EjsExport } from './ejs-export';

describe('EjsExport', () => {
  let service: EjsExport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjsExport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
