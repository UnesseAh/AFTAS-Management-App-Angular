import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionTableComponent } from './competition-table.component';

describe('CompetitionTableComponent', () => {
  let component: CompetitionTableComponent;
  let fixture: ComponentFixture<CompetitionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionTableComponent]
    });
    fixture = TestBed.createComponent(CompetitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
