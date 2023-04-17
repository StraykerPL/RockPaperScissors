import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { IconRegistryData } from '../consts/IconRegistryData';
import { IconRegistryObject } from '../models/IconRegistryObject';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  performRegistration() {
    IconRegistryData.forEach((element: IconRegistryObject) => {
      this.iconRegistry.addSvgIcon(
        element.iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(element.iconPath)
      );
    });
  }
}
