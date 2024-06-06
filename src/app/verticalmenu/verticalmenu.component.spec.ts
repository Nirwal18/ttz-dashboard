import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalmenuComponent } from './verticalmenu.component';

describe('VerticalmenuComponent', () => {
  let component: VerticalmenuComponent;
  let fixture: ComponentFixture<VerticalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
