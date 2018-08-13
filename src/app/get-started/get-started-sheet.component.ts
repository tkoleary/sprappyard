import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

/**
 * @title Get Started Sheet Component
 */

@Component({
  selector: 'app-get-started-sheet',
  templateUrl: 'get-started-sheet.component.html',
})
export class GetStartedSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<GetStartedSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
