import { Injectable } from '@angular/core';
import { GameState } from '../consts/GameState.enum';
import { PlayOption } from '../consts/PlayOption.enum';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	private playerOption: PlayOption = PlayOption.paper;
	private aiOption: PlayOption = PlayOption.paper;
	public victoriesCount: number = 0;
	public displayResults: boolean = false;

	constructor() {}

	public play(option: PlayOption) {
		this.playerOption = option;

		this.setAiOption();
	}

	public setAiOption() {
		const optionStrings = Object.values(PlayOption);
		const choosenValue = optionStrings[Math.random() * 3];
		this.aiOption = choosenValue as PlayOption;
	}

	public isVictory(): GameState {
		if (this.aiOption == PlayOption.scissors) {
			if (this.playerOption == PlayOption.paper) {
				return GameState.lose;
			}
		} else if (this.aiOption == PlayOption.paper) {
			if (this.playerOption == PlayOption.rock) {
				return GameState.lose;
			}
		} else if (this.aiOption == PlayOption.rock) {
			if (this.playerOption == PlayOption.scissors) {
				return GameState.lose;
			}
		}

		this.victoriesCount++;
		return GameState.victory;
	}

	public restartGame() {
		this.playerOption = PlayOption.paper;
		this.aiOption = PlayOption.paper;
		this.displayResults = false;
	}
}
