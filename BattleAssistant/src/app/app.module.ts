import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { AppUpdate } from '@ionic-native/app-update';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PartyService } from '../services/party.service';
import { CreatureService } from '../services/creature.service';
import { LanguageService } from "../services/language.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { BattlePage } from '../pages/battle/battle';
import { AddPartyPage } from '../pages/add-party/add-party';
import { CreaturePage } from '../pages/creature/creature';
import { EncounterPage } from '../pages/encounter/encounter';
import { OptionsPage } from '../pages/options/options';

import { NumberPopoverComponent } from '../components/number-popover/number-popover';
import { NewpartyPopoverComponent } from '../components/newparty-popover/newparty-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    AddPartyPage,
    NumberPopoverComponent,
    NewpartyPopoverComponent,
    CreaturePage,
    EncounterPage,
    OptionsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    BattlePage,
    AddPartyPage,
    NumberPopoverComponent,
    NewpartyPopoverComponent,
    CreaturePage,
    EncounterPage,
    OptionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PartyService,
    CreatureService,
    LanguageService,
    Storage,
    AppUpdate,
  ]
})
export class AppModule {}
