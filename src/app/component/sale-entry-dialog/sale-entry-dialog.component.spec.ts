import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEntryDialogComponent } from './sale-entry-dialog.component';

describe('SaleEntryDialogComponent', () => {
  let component: SaleEntryDialogComponent;
  let fixture: ComponentFixture<SaleEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEntryDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
