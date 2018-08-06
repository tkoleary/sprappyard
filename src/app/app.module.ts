import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatTabsModule,
  MatChipsModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatBottomSheetModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ScrappyardNavComponent } from './scrappyard-nav/scrappyard-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrappyardFooterComponent } from './scrappyard-footer/scrappyard-footer.component';
import { ScrappyardContentComponent } from './scrappyard-content/scrappyard-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrappyardNavComponent,
    ScrappyardFooterComponent,
    ScrappyardContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

