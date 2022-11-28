import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from 'src/shared/services/game.service';
import { IconRegistryService } from 'src/shared/services/icon-registry.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [GameService, IconRegistryService],
})
export class SharedModule {}
