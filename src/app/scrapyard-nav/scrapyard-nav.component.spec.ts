
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScrapyardNavComponent } from './scrapyard-nav.component';

describe('ScrappyardNavComponent', () => {
  let component: ScrapyardNavComponent;
  let fixture: ComponentFixture<ScrapyardNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ScrapyardNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapyardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
