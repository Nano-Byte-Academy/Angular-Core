import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComp1Component } from './template-comp-1.component';

describe('TemplateComp1Component', () => {
  let component: TemplateComp1Component;
  let fixture: ComponentFixture<TemplateComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
