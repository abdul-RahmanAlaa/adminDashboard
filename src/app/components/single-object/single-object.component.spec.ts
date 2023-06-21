import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleObjectComponent } from './single-object.component';

describe('SingleObjectComponent', () => {
  let component: SingleObjectComponent;
  let fixture: ComponentFixture<SingleObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleObjectComponent]
    });
    fixture = TestBed.createComponent(SingleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
