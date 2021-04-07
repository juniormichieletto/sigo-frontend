import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNormasComponent } from './lista-normas.component';

describe('ListaNormasComponent', () => {
  let component: ListaNormasComponent;
  let fixture: ComponentFixture<ListaNormasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNormasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
