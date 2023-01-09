import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-score-box',
	templateUrl: './score-box.component.html',
	styleUrls: ['./score-box.component.scss'],
})
export class ScoreBoxComponent implements OnInit {
	@Input() score: number = 0;

	constructor() {}

	ngOnInit() {}
}
