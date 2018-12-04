import { AdMobPro } from '@ionic-native/admob-pro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams, private admob: AdMobPro) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AboutPage');
  // }

  constructor(public navCtrl: NavController, platform: Platform, private admob: AdMobPro) {
    platform.ready().then(() => {
        var admobid = {
            banner: 'ca-app-pub-7957971173858308/5068937357',
            interstitial: 'ca-app-pub-7957971173858308/5667703151'
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
