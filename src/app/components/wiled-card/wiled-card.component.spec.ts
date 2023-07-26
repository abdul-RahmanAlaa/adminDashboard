import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiledCardComponent } from './wiled-card.component';

describe('WiledCardComponent', () => {
  let component: WiledCardComponent;
  let fixture: ComponentFixture<WiledCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiledCardComponent]
    });
    fixture = TestBed.createComponent(WiledCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
