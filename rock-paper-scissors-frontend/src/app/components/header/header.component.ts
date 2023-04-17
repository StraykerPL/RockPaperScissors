import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public counterValue: number = 0;

  constructor(private gameService: GameService) {
    this.gameService.newVictory.subscribe(
      (newVictoriesCount: number) => (this.counterValue = newVictoriesCount)
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.gameService.newVictory.unsubscribe();
  }
}
