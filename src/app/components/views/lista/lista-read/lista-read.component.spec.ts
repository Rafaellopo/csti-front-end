import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReadComponent } from './lista-read.component';

describe('ListaReadComponent', () => {
  let component: ListaReadComponent;
  let fixture: ComponentFixture<ListaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
