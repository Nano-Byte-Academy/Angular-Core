import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirComponent } from './struct-dir.component';

describe('StructDirComponent', () => {
  let component: StructDirComponent;
  let fixture: ComponentFixture<StructDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
