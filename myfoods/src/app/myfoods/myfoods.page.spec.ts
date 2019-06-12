import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfoodsPage } from './myfoods.page';

describe('MyfoodsPage', () => {
  let component: MyfoodsPage;
  let fixture: ComponentFixture<MyfoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfoodsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
