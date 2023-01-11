import { Component } from '@angular/core';
import { GameState } from 'src/shared/consts/GameState.enum';
import { IconRegistryService } from 'src/shared/services/icon-registry.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'rock-paper-scissors-frontend';
	gameState = GameState.undefined;

	constructor(private iconRegistry: IconRegistryService) {
		this.iconRegistry.performRegistration();
	}
}
