import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepilacijeComponent } from './depilacije.component';

describe('DepilacijeComponent', () => {
  let component: DepilacijeComponent;
  let fixture: ComponentFixture<DepilacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepilacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepilacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
