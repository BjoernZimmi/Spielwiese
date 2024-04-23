import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalWarenkorbComponent } from './signal-warenkorb.component';

describe('SignalWarenkorbComponent', () => {
  let component: SignalWarenkorbComponent;
  let fixture: ComponentFixture<SignalWarenkorbComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalWarenkorbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalWarenkorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
