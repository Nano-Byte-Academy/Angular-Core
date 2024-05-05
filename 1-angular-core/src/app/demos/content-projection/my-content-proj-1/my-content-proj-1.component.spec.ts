import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContentProj1Component } from './my-content-proj-1.component';

describe('MyContentProj1Component', () => {
  let component: MyContentProj1Component;
  let fixture: ComponentFixture<MyContentProj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContentProj1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyContentProj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
