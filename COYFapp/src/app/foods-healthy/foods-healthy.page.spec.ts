import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsHealthyPage } from './foods-healthy.page';

describe('FoodsHealthyPage', () => {
  let component: FoodsHealthyPage;
  let fixture: ComponentFixture<FoodsHealthyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsHealthyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsHealthyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
