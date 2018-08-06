
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScrappyardNavComponent } from './scrappyard-nav.component';

describe('ScrappyardNavComponent', () => {
  let component: ScrappyardNavComponent;
  let fixture: ComponentFixture<ScrappyardNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ScrappyardNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrappyardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
