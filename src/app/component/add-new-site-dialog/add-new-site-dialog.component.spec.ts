import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSiteDialogComponent } from './add-new-site-dialog.component';

describe('AddNewSiteDialogComponent', () => {
  let component: AddNewSiteDialogComponent;
  let fixture: ComponentFixture<AddNewSiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewSiteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewSiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
