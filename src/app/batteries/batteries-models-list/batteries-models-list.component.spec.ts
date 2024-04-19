import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesModelsListComponent } from './batteries-models-list.component';

describe('BatteriesModelsListComponent', () => {
  let component: BatteriesModelsListComponent;
  let fixture: ComponentFixture<BatteriesModelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesModelsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesModelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
