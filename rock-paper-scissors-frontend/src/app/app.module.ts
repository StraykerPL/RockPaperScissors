import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { GameService } from 'src/shared/services/game.service';

import { RulesButtonComponent } from './components/rules-button/rules-button.component';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, RulesButtonComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [GameService],
	bootstrap: [AppComponent],
})
export class AppModule {}
