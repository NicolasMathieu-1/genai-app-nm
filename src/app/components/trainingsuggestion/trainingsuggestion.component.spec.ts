import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsuggestionComponent } from './trainingsuggestion.component';

describe('TrainingsuggestionComponent', () => {
  let component: TrainingsuggestionComponent;
  let fixture: ComponentFixture<TrainingsuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
