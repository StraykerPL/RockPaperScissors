import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayOption } from 'src/shared/consts/PlayOption.enum';

@Component({
	selector: 'app-play-option',
	templateUrl: './play-option.component.html',
	styleUrls: ['./play-option.component.scss'],
})
export class PlayOptionComponent implements OnInit {
	@Input() option: PlayOption = PlayOption.undefined;
	@Input() isBig: boolean = false;
	private baseClassName: string = 'play-option';
	classNames: string = '';
	iconName: string = '';
	@Output() selected: EventEmitter<PlayOption> =
		new EventEmitter<PlayOption>();

	constructor() {}

	ngOnInit() {
		this.classNames = this.baseClassName;

		if (this.option !== PlayOption.undefined) {
			const optionNames = Object.values(PlayOption);
			this.iconName = optionNames[this.option] + '-icon';
			this.classNames =
				this.baseClassName +
				' ' +
				this.baseClassName +
				'--' +
				optionNames[this.option];
		}

		if (this.isBig) {
			this.classNames += ' ' + this.baseClassName + '--big';
		}
	}

	optionClickHandler() {
		this.selected.emit(this.option);
	}
}
