import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatIconRegistry, MatCardModule, MatIconModule,
  MatOptionModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatCheckboxModule,
  MatRadioModule, MatMenuModule, MatTooltipModule, MatInputModule, MatFormFieldModule,
  MatGridListModule, MatProgressSpinnerModule, MatAutocompleteModule, MatChipsModule, MatTableModule
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const materialModules = [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatChipsModule,
    MatTableModule
];

@NgModule({
  imports: [],
  exports: [...materialModules]
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry,  domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
