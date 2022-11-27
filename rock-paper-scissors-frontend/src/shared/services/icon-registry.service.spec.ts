/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IconRegistryService } from './icon-registry.service';

describe('Service: IconRegistry', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [IconRegistryService],
		});
	});

	it('should ...', inject(
		[IconRegistryService],
		(service: IconRegistryService) => {
			expect(service).toBeTruthy();
		}
	));
});
