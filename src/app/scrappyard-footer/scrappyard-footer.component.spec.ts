import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrappyardFooterComponent } from './scrappyard-footer.component';

describe('ScrappyardFooterComponent', () => {
  let component: ScrappyardFooterComponent;
  let fixture: ComponentFixture<ScrappyardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrappyardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrappyardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
