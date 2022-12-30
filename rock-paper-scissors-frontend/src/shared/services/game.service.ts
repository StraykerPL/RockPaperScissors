import { Injectable } from '@angular/core';
import { GameState } from '../consts/GameState.enum';
import { PlayOption } from '../consts/PlayOption.enum';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	private playerOption: PlayOption;
	private aiOption: PlayOption;
	public victoriesCount: number = 0;

	constructor() {
		this.playerOption = PlayOption.paper;
		this.aiOption = PlayOption.paper;
	}

	public play(option: PlayOption): void {
		this.playerOption = option;
	}

	public setAiOption(): void {
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

	public restartGame(): void {}
}
