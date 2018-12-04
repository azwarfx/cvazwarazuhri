import { AdMobPro } from '@ionic-native/admob-pro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EducationPage');
  // }


  constructor(public navCtrl: NavController, platform: Platform, private admob: AdMobPro) {
    platform.ready().then(() => {
        var admobid = {
            banner: 'ca-app-pub-3940256099942544/6300978111',
            interstitial: 'ca-app-pub-3940256099942544/1033173712'
        };

        this.admob.createBanner({
            adId: admobid.banner,
            isTesting: true,
            autoShow: true,
            position: this.admob.AD_POSITION.BOTTOM_CENTER
        })

        this.admob.prepareInterstitial({
            adId: admobid.interstitial,
            isTesting: true,
            autoShow: false
        })
    });
}

showInterstitialAd() {
    if (AdMobPro) {
        this.admob.showInterstitial();
    }
}


}
