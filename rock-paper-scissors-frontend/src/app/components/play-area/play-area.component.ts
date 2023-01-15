import { Component, OnInit } from '@angular/core';
import { GameState } from 'src/shared/consts/GameState.enum';
import { PlayOption } from 'src/shared/consts/PlayOption.enum';
import { GameService } from 'src/shared/services/game.service';

@Component({
	selector: 'app-play-area',
	templateUrl: './play-area.component.html',
	styleUrls: ['./play-area.component.scss'],
})
export class PlayAreaComponent implements OnInit {
	rockPlayOption: PlayOption = PlayOption.rock;
	paperPlayOption: PlayOption = PlayOption.paper;
	scissorsPlayOption: PlayOption = PlayOption.scissors;
	undefinedPlayOption: PlayOption = PlayOption.undefined;
	state: GameState = GameState.undefined;
	victoryState: GameState = GameState.victory;

	playerChoice: PlayOption = PlayOption.undefined;
	aiChoice: PlayOption = PlayOption.undefined;

	isBig: boolean = true;
	showChoices: boolean = false;
	showResults: boolean = false;

	constructor(private gameService: GameService) {}

	ngOnInit() {}

	async gameStart(value: PlayOption) {
		this.playerChoice = value;
		this.showChoices = true;

		await this.gameService.sleep(3000);
		this.aiChoice = this.gameService.setAiOption();

		await this.gameService.sleep(3000);
		this.state = this.gameService.isVictory(
			this.playerChoice,
			this.aiChoice
		);
		this.showResults = true;

		if (this.state === GameState.victory) {
			this.gameService.newVictory.next(
				this.gameService.newVictory.getValue() + 1
			);
		}
	}

	restartGame() {
		this.state = GameState.undefined;
		this.playerChoice = PlayOption.undefined;
		this.aiChoice = PlayOption.undefined;
		this.showChoices = false;
		this.showResults = false;
	}
}
