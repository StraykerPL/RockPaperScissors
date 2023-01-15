import { EventEmitter, Injectable } from '@angular/core';
import { GameState } from '../consts/GameState.enum';
import { PlayOption } from '../consts/PlayOption.enum';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	public victoriesCount: number = 0;
	public addNewVictory: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	public async sleep(miliseconds: number) {
		await new Promise((r) => setTimeout(r, miliseconds));
	}

	public setAiOption() {
		const optionStrings = Object.values(PlayOption);
		optionStrings.shift(); // Removing "undefined" value,
		const choosenValue = optionStrings[Math.floor(Math.random() * 3)];
		return PlayOption[choosenValue as keyof typeof PlayOption];
	}

	public isVictory(
		playerOption: PlayOption,
		aiOption: PlayOption
	): GameState {
		if (aiOption == PlayOption.scissors) {
			if (playerOption == PlayOption.paper) {
				return GameState.lose;
			}
		} else if (aiOption == PlayOption.paper) {
			if (playerOption == PlayOption.rock) {
				return GameState.lose;
			}
		} else if (aiOption == PlayOption.rock) {
			if (playerOption == PlayOption.scissors) {
				return GameState.lose;
			}
		}

		return GameState.victory;
	}
}
