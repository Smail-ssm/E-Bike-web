import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesListComponent } from './batteries-list.component';

describe('BatteriesListComponent', () => {
  let component: BatteriesListComponent;
  let fixture: ComponentFixture<BatteriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
