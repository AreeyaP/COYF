import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodsPage } from './list-foods.page';

describe('ListFoodsPage', () => {
  let component: ListFoodsPage;
  let fixture: ComponentFixture<ListFoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoodsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
