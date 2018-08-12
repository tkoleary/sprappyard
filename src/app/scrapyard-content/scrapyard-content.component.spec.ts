import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapyardContentComponent } from './scrapyard-content.component';

describe('ScrapyardContentComponent', () => {
  let component: ScrapyardContentComponent;
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
