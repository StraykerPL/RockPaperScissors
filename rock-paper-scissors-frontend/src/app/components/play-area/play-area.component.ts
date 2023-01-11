import { Component, OnInit } from '@angular/core';
import { GameState } from 'src/shared/consts/GameState.enum';
import { PlayOption } from 'src/shared/consts/PlayOption.enum';

@Component({
	selector: 'app-play-area',
	templateUrl: './play-area.component.html',
	styleUrls: ['./play-area.component.scss'],
})
export class PlayAreaComponent implements OnInit {
	rockPlayOption: PlayOption = PlayOption.rock;
	paperPlayOption: PlayOption = PlayOption.paper;
	scissorsPlayOption: PlayOption = PlayOption.scissors;
	state: GameState = GameState.undefined;

	playerChoice: PlayOption = PlayOption.undefined;
	aiChoice: PlayOption = PlayOption.undefined;

	showChoices: boolean = false;
	showResults: boolean = false;

	constructor() {}

	ngOnInit() {}

	playerChoose(value: PlayOption) {
		this.playerChoice = value;
		this.showChoices = true;
	}
}
