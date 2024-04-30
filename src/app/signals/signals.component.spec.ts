import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComponent } from './signals.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignalsComponent', () => {
  let component: SignalsComponent;
  let fixture: ComponentFixture<SignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
