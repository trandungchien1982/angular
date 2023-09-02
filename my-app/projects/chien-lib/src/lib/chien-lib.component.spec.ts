import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienLibComponent } from './chien-lib.component';

describe('ChienLibComponent', () => {
  let component: ChienLibComponent;
  let fixture: ComponentFixture<ChienLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChienLibComponent]
    });
    fixture = TestBed.createComponent(ChienLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
