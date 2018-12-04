import { PortofolioPage } from './../pages/portofolio/portofolio';
import { SkillPage } from './../pages/skill/skill';
import { AboutPage } from './../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobPro } from '@ionic-native/admob-pro';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { EducationPage } from '../pages/education/education';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EducationPage,
    SkillPage,
    PortofolioPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EducationPage,
    SkillPage,
    PortofolioPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobPro,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
