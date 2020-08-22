import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationComponent } from './filteration.component';

describe('FilterationComponent', () => {
  let component: FilterationComponent;
  let fixture: ComponentFixture<FilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
