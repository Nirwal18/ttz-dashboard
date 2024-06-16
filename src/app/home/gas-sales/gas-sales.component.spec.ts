import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasSalesComponent } from './gas-sales.component';

describe('GasSalesComponent', () => {
  let component: GasSalesComponent;
  let fixture: ComponentFixture<GasSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
