import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ScrapyardNavComponent } from './scrapyard-nav/scrapyard-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrapyardFooterComponent } from './scrapyard-footer/scrapyard-footer.component';
import { ScrapyardContentComponent } from './scrapyard-content/scrapyard-content.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { HowTabComponent } from './how-tab/how-tab.component';
import { WhyTabComponent } from './why-tab/why-tab.component';
import { WorkTabComponent } from './work-tab/work-tab.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { GetStartedSheetComponent } from './get-started/get-started-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrapyardNavComponent,
    ScrapyardFooterComponent,
    ScrapyardContentComponent,
    HomeTabComponent,
    HowTabComponent,
    WhyTabComponent,
    WorkTabComponent,
    GetStartedComponent,
    GetStartedSheetComponent,
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
    MatBottomSheetModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
