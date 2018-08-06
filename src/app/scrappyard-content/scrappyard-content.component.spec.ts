import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrappyardContentComponent } from './scrappyard-content.component';

describe('ScrappyardContentComponent', () => {
  let component: ScrappyardContentComponent;
  let fixture: ComponentFixture<ScrappyardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrappyardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrappyardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
