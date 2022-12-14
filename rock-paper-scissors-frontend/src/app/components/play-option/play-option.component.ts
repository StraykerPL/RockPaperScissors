import { Component, Input, OnInit } from '@angular/core';
import { PlayOption } from 'src/shared/consts/PlayOption.enum';
import { GameService } from 'src/shared/services/game.service';

@Component({
	selector: 'app-play-option',
	templateUrl: './play-option.component.html',
	styleUrls: ['./play-option.component.scss'],
})
export class PlayOptionComponent implements OnInit {
	@Input() option: PlayOption = PlayOption.undefined;
	private baseClassName: string = 'play-option';
	classNames: string = '';
	iconName: string = '';

	constructor(private gameService: GameService) {}

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
	}

	optionClickHandler() {}
}
