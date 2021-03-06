import { UserprofilePage } from './../userprofile/userprofile';
import { TruckPage } from './../truck/truck';
import { TapPage } from './../tap/tap';
import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SigninPage } from '../signin/signin';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 today:number;
  constructor(public navCtrl: NavController, private auth:AuthProvider) {

  }

  tap(){
this.navCtrl.push(TapPage);
  }

  truck(){
    this.navCtrl.push(TruckPage);
  }
  map(){
    this.navCtrl.push(MapPage);
  }
  active(){
    this.navCtrl.push(ListPage)
  }
  logout(){
    this.auth.signOut();
    this.navCtrl.push(SigninPage);
  }
}
