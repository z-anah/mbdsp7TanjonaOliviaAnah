import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCompetitionComponent } from './match-competition.component';

describe('MatchCompetitionComponent', () => {
  let component: MatchCompetitionComponent;
  let fixture: ComponentFixture<MatchCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
