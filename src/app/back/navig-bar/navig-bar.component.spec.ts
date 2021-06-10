import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigBarComponent } from './navig-bar.component';

describe('NavigBarComponent', () => {
  let component: NavigBarComponent;
  let fixture: ComponentFixture<NavigBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
