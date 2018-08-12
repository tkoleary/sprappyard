import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTabComponent } from './why-tab.component';

describe('WhyTabComponent', () => {
  let component: WhyTabComponent;
  let fixture: ComponentFixture<WhyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
