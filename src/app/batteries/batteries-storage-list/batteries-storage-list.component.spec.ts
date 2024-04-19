import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesStorageListComponent } from './batteries-storage-list.component';

describe('BatteriesStorageListComponent', () => {
  let component: BatteriesStorageListComponent;
  let fixture: ComponentFixture<BatteriesStorageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesStorageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesStorageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
