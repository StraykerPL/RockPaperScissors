/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RulesModalComponent } from './rules-modal.component';

describe('RulesModalComponent', () => {
	let component: RulesModalComponent;
	let fixture: ComponentFixture<RulesModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RulesModalComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RulesModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
