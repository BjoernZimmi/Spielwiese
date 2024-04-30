import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InfoBoxComponent } from './info-box.component';
import { NO_ERRORS_SCHEMA, Type } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;
  let httpMock: HttpTestingController;
  // const lifecycleComponent = jasmine.createSpyObj("LifecycleComponent", ["name"]);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LifecycleComponent],
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

  });

  it('should create', () => {
    expect(component)['toBeTruthy']();
  });

  // it('should return books per Rest-Api', () => {
  //   expect(component.).toBeTruthy();
  // });
});
