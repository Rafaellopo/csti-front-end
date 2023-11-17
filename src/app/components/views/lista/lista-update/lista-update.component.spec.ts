import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUpdateComponent } from './lista-update.component';

describe('ListaUpdateComponent', () => {
  let component: ListaUpdateComponent;
  let fixture: ComponentFixture<ListaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
