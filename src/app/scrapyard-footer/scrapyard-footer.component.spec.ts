import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapyardFooterComponent } from './scrapyard-footer.component';

describe('ScrapyardFooterComponent', () => {
  let component: ScrapyardFooterComponent;
  let fixture: ComponentFixture<ScrapyardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapyardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapyardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
