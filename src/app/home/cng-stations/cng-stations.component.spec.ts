import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CngStationsComponent } from './cng-stations.component';

describe('CngStationsComponent', () => {
  let component: CngStationsComponent;
  let fixture: ComponentFixture<CngStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CngStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CngStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
