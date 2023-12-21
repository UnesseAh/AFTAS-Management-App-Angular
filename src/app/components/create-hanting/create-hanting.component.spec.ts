import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHantingComponent } from './create-hanting.component';

describe('CreateHantingComponent', () => {
  let component: CreateHantingComponent;
  let fixture: ComponentFixture<CreateHantingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHantingComponent]
    });
    fixture = TestBed.createComponent(CreateHantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
