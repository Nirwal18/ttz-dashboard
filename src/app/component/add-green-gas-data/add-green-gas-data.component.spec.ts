import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGreenGasDataComponent } from './add-green-gas-data.component';

describe('AddGreenGasDataComponent', () => {
  let component: AddGreenGasDataComponent;
  let fixture: ComponentFixture<AddGreenGasDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGreenGasDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGreenGasDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
