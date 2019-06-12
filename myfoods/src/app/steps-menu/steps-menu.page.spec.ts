import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMenuPage } from './steps-menu.page';

describe('StepsMenuPage', () => {
  let component: StepsMenuPage;
  let fixture: ComponentFixture<StepsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
