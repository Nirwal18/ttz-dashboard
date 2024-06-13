import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaListComponent } from './ga-list.component';

describe('GaListComponent', () => {
  let component: GaListComponent;
  let fixture: ComponentFixture<GaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
