import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesModalComponent } from 'src/app/components/rules-modal/rules-modal.component';

@Component({
	selector: 'app-rules-button',
	templateUrl: './rules-button.component.html',
	styleUrls: ['./rules-button.component.scss'],
})
export class RulesButtonComponent implements OnInit {
	constructor(private dialog: MatDialog) {}

	ngOnInit() {}

	rulesButtonClicked(): void {
		this.dialog.open(RulesModalComponent, {
			autoFocus: false,
			restoreFocus: false,
		});
	}
}
