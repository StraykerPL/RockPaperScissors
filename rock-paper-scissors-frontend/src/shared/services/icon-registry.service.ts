import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
	providedIn: 'root',
})
export class IconRegistryService {
	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {}

	addCloseIcon() {
		this.iconRegistry.addSvgIcon(
			'close-icon',
			this.sanitizer.bypassSecurityTrustResourceUrl(
				'../../assets/images/icon-close.svg'
			)
		);
	}
}
