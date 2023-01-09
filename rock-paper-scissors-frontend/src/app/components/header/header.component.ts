import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/game.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public counterValue: number = 0;

	constructor(private gameService: GameService) {
		this.counterValue = this.gameService.victoriesCount;
	}

	ngOnInit() {}
}
