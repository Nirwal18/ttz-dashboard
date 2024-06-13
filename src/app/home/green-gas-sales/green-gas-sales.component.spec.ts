import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGasSalesComponent } from './green-gas-sales.component';

describe('GreenGasSalesComponent', () => {
  let component: GreenGasSalesComponent;
  let fixture: ComponentFixture<GreenGasSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenGasSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenGasSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
