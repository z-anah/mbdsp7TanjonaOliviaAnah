import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModeratorComponent } from './list-moderator.component';

describe('ListModeratorComponent', () => {
  let component: ListModeratorComponent;
  let fixture: ComponentFixture<ListModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
