import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameState } from 'src/shared/consts/GameState.enum';

@Component({
  selector: 'app-play-again-button',
  templateUrl: './play-again-button.component.html',
  styleUrls: ['./play-again-button.component.scss'],
})
export class PlayAgainButtonComponent implements OnInit {
  private baseClassName: string = 'play-again-button';

  @Input() gameState: GameState = GameState.undefined;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  classNames: string = this.baseClassName;

  constructor() {}

  ngOnInit() {
    if (this.gameState !== GameState.undefined) {
      if (this.gameState === GameState.victory) {
        this.classNames += ' ' + this.baseClassName + '--victory';
      } else if (this.gameState === GameState.lose) {
        this.classNames += ' ' + this.baseClassName + '--lose';
      }
    }
  }

  buttonClickHandle() {
    this.clicked.emit();
  }
}
