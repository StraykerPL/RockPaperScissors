import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { GameService } from 'src/shared/services/game.service';
import { IconRegistryService } from 'src/shared/services/icon-registry.service';

import { AppComponent } from './app.component';
import { RulesButtonComponent } from './components/rules-button/rules-button.component';
import { RulesModalComponent } from 'src/shared/components/rules-modal/rules-modal.component';

@NgModule({
	declarations: [AppComponent, RulesButtonComponent, RulesModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatIconModule,
		HttpClientModule,
	],
	providers: [GameService, IconRegistryService],
	bootstrap: [AppComponent],
})
export class AppModule {}
