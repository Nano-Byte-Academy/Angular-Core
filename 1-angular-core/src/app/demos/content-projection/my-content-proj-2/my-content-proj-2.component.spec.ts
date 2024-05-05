import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContentProj2Component } from './my-content-proj-2.component';

describe('MyContentProj2Component', () => {
  let component: MyContentProj2Component;
  let fixture: ComponentFixture<MyContentProj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContentProj2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyContentProj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
