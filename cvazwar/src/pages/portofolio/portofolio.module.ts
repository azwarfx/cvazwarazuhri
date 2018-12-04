import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortofolioPage } from './portofolio';

@NgModule({
  declarations: [
    PortofolioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortofolioPage),
  ],
})
export class PortofolioPageModule {}
