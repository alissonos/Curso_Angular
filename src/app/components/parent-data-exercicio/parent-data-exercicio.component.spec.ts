import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataExercicioComponent } from './parent-data-exercicio.component';

describe('ParentDataExercicioComponent', () => {
  let component: ParentDataExercicioComponent;
  let fixture: ComponentFixture<ParentDataExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDataExercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDataExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
