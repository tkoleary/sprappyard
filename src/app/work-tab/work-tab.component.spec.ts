import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTabComponent } from './work-tab.component';

describe('WorkTabComponent', () => {
  let component: WorkTabComponent;
  let fixture: ComponentFixture<WorkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
