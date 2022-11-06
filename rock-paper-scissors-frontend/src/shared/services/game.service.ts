import { Injectable } from '@angular/core';
import { PlayOption } from '../models/PlayOption.enum';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private playerOption: PlayOption;
  private aiOption: PlayOption;

  constructor() {
    this.playerOption = PlayOption.paper;
    this.aiOption = PlayOption.paper;
  }

  public play(): void {

  }

  public setAiOption(): void {
    
  }
}
