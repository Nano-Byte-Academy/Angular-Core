import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotngifCompComponent } from './my-notngif-comp.component';

describe('MyNotngifCompComponent', () => {
  let component: MyNotngifCompComponent;
  let fixture: ComponentFixture<MyNotngifCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNotngifCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNotngifCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
