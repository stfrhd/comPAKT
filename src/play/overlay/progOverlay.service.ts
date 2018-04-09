import { Injectable, Inject, OnInit, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { ProgOverlayComponent } from './progOverlay.component';

import { ProgOverlayRef } from './progOverlay-ref';
import { PREVIEW_DIALOG_DATA } from './progOverlay.tokens';

export interface Image {
  name: string;
  url: string;
}

interface PreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: Image;
}

const DEFAULT_CONFIG: PreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  image: null
};

@Injectable()
export class ProgOverlayService {

  constructor(
    private injector: Injector,
    private overlay: Overlay) { }

  open(config: PreviewDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new ProgOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    dialogRef.componentInstance = overlayComponent;

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: PreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: PreviewDialogConfig, dialogRef: ProgOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(ProgOverlayComponent, null, injector);
    const containerRef: ComponentRef<ProgOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: PreviewDialogConfig, dialogRef: ProgOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ProgOverlayRef, dialogRef);
    injectionTokens.set(PREVIEW_DIALOG_DATA, config.image);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: PreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
