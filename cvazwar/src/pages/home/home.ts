import { PortofolioPage } from './../portofolio/portofolio';
import { SkillPage } from './../skill/skill';
import { AboutPage } from './../about/about';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { EducationPage } from '../education/education';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page1: any = AboutPage;
  page2: any = EducationPage;
  page3: any = SkillPage;
  page4: any = PortofolioPage;

  @ViewChild(SuperTabs) superTabs: SuperTabs;
  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  hideToolbar() {
    this.superTabs.showToolbar(false);
  }
  constructor(public navCtrl: NavController) {

  }

}
