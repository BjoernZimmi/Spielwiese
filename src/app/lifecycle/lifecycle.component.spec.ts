import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleComponent } from './lifecycle.component';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LifecycleComponent', () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;
  // const infoBoxComponent = jasmine.createSpyObj("InfoBoxComponent", ["name"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBoxComponent],
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)['toBeTruthy']();
  });
});
