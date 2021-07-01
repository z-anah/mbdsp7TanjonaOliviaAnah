import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifModeratorComponent } from './modif-moderator.component';

describe('ModifModeratorComponent', () => {
  let component: ModifModeratorComponent;
  let fixture: ComponentFixture<ModifModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
