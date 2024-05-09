import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomColorComponent } from './my-custom-color.component';

describe('MyCustomColorComponent', () => {
  let component: MyCustomColorComponent;
  let fixture: ComponentFixture<MyCustomColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCustomColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
