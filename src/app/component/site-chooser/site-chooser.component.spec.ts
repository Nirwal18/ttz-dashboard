import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteChooserComponent } from './site-chooser.component';

describe('SiteChooserComponent', () => {
  let component: SiteChooserComponent;
  let fixture: ComponentFixture<SiteChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteChooserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
