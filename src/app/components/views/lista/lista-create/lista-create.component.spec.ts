import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCreateComponent } from './lista-create.component';

describe('ListaCreateComponent', () => {
  let component: ListaCreateComponent;
  let fixture: ComponentFixture<ListaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
