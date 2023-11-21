import { TestBed } from '@angular/core/testing';

import { ItemListaService } from './item-lista.service';

describe('ItemListaService', () => {
  let service: ItemListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
