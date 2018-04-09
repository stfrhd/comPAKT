import { InjectionToken } from '@angular/core';

import { Image } from './progOverlay.service';

export const PREVIEW_DIALOG_DATA = new InjectionToken<Image>('PREVIEW_DIALOG_DATA');
