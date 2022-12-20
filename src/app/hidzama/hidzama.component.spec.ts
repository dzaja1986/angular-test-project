import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidzamaComponent } from './hidzama.component';

describe('HidzamaComponent', () => {
  let component: HidzamaComponent;
  let fixture: ComponentFixture<HidzamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidzamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidzamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
