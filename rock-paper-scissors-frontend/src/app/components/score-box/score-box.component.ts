import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/game.service';

@Component({
	selector: 'app-score-box',
	templateUrl: './score-box.component.html',
	styleUrls: ['./score-box.component.scss'],
})
export class ScoreBoxComponent implements OnInit {
	score = '';

	constructor(private gameService: GameService) {
		this.score = gameService.victoriesCount.toString();
	}

	ngOnInit() {}
}
