import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileMatchComponent } from './detaile-match.component';

describe('DetaileMatchComponent', () => {
  let component: DetaileMatchComponent;
  let fixture: ComponentFixture<DetaileMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
