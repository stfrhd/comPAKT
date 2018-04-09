import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { filter, take } from 'rxjs/operators';

import { ProgOverlayComponent } from './progOverlay.component';

export class ProgOverlayRef {

  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();

  componentInstance: ProgOverlayComponent;

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe(() => {
      this._beforeClose.next();
      this._beforeClose.complete();
      this.overlayRef.detachBackdrop();
    });

    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'leave'),
      take(1)
    ).subscribe(() => {
      this.overlayRef.dispose();
      this._afterClosed.next();
      this._afterClosed.complete();

      // tslint:disable-next-line:no-non-null-assertion
      this.componentInstance = null!;
    });

    this.componentInstance.startExitAnimation();
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable();
  }
}
