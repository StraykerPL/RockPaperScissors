import { Component } from '@angular/core';
import { GameState } from 'src/shared/consts/GameState.enum';
import { GameService } from 'src/shared/services/game.service';
import { IconRegistryService } from 'src/shared/services/icon-registry.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'rock-paper-scissors-frontend';
	gameState: GameState = GameState.undefined;
	areDecisionsMade: boolean = false;

	constructor(
		private iconRegistry: IconRegistryService,
		private gameService: GameService
	) {
		this.iconRegistry.performRegistration();
		this.gameState = this.gameService.isVictory();
		this.areDecisionsMade = this.gameService.displayResults;
	}
}
