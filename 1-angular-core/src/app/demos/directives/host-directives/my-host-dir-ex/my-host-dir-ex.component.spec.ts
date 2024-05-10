import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostDirExComponent } from './my-host-dir-ex.component';

describe('MyHostDirExComponent', () => {
  let component: MyHostDirExComponent;
  let fixture: ComponentFixture<MyHostDirExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHostDirExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHostDirExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
