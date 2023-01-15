import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/shared/services/game.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public counterValue: number = 0;
	private handler: Subscription = this.gameService.addNewVictory.subscribe(
		(newVictoriesCount: number) => (this.counterValue = newVictoriesCount)
	);

	constructor(private gameService: GameService) {}

	ngOnInit() {}
}
