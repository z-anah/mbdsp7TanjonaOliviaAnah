import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBloqueComponent } from './dialog-bloque.component';

describe('DialogBloqueComponent', () => {
  let component: DialogBloqueComponent;
  let fixture: ComponentFixture<DialogBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
