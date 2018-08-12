import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTabComponent } from './how-tab.component';

describe('HowTabComponent', () => {
  let component: HowTabComponent;
  let fixture: ComponentFixture<HowTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
