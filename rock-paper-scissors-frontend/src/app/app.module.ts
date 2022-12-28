import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { GameService } from 'src/shared/services/game.service';

import { AppComponent } from './app.component';
import { RulesButtonComponent } from './components/rules-button/rules-button.component';
import { RulesModalComponent } from 'src/app/components/rules-modal/rules-modal.component';
import { ScoreBoxComponent } from './components/score-box/score-box.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		RulesButtonComponent,
		RulesModalComponent,
		ScoreBoxComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		MatDialogModule,
		MatIconModule,
		HttpClientModule,
	],
	providers: [GameService],
	bootstrap: [AppComponent],
})
export class AppModule {}
