import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaReadComponent } from './item-lista-read.component';

describe('ItemListaReadComponent', () => {
  let component: ItemListaReadComponent;
  let fixture: ComponentFixture<ItemListaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
