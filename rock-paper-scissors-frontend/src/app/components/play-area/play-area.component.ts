import { Component, OnInit } from '@angular/core';
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

	constructor(private gameService: GameService) {}

	ngOnInit() {}
}
