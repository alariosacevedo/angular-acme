import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSiderbarComponent } from './control-siderbar.component';

describe('ControlSiderbarComponent', () => {
  let component: ControlSiderbarComponent;
  let fixture: ComponentFixture<ControlSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlSiderbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
