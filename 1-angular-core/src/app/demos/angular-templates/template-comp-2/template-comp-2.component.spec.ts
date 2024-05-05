import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComp2Component } from './template-comp-2.component';

describe('TemplateComp2Component', () => {
  let component: TemplateComp2Component;
  let fixture: ComponentFixture<TemplateComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateComp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
