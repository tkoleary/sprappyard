import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { GetStartedSheetComponent } from './get-started-sheet.component';

/**
 * @title Get Started Component
 */

 @Component({
  selector: 'app-get-started',
  templateUrl: 'get-started.component.html',
  styleUrls: ['get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(GetStartedSheetComponent);
  }

  ngOnInit() {
  }
}
