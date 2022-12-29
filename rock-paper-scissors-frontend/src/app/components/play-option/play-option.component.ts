import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-play-option',
	templateUrl: './play-option.component.html',
	styleUrls: ['./play-option.component.scss'],
})
export class PlayOptionComponent implements OnInit {
	@Input() optionName: string = '';
	private baseClassName: string = 'play-option';
	classNames: string = '';
	iconName: string = '';

	constructor() {}

	ngOnInit() {
		this.classNames = this.baseClassName;

		if (this.optionName !== '') {
			this.iconName = this.optionName + '-icon';
			this.classNames =
				this.baseClassName +
				' ' +
				this.baseClassName +
				'--' +
				this.optionName;
		}
	}
}
