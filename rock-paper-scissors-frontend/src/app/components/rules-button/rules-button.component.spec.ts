/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesButtonComponent } from './rules-button.component';

describe('RulesButtonComponent', () => {
	let component: RulesButtonComponent;
	let fixture: ComponentFixture<RulesButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RulesButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RulesButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
