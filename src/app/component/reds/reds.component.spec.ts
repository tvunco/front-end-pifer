import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsComponent } from './reds.component';

describe('RedsComponent', () => {
  let component: RedsComponent;
  let fixture: ComponentFixture<RedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
