import { UserprofilePage } from './../pages/userprofile/userprofile';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { TruckPage } from './../pages/truck/truck';
import { TapPage } from './../pages/tap/tap';
import { MapPage } from './../pages/map/map';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { AuthProvider } from '../providers/auth/auth';
import * as firebase from 'firebase';
import { ProfileProvider } from '../providers/profile/profile';
import { WaterServiceProvider } from '../providers/water-service/water-service';
import { TapProvider } from '../providers/tap/tap';
import { TruckProvider } from '../providers/truck/truck';
import { ListPage } from '../pages/list/list';



var config = {
    apiKey: "AIzaSyCDA2SmyMOpqB49eOYtL566O6_QZOQL9zQ",
    authDomain: "waterapp-aa3d2.firebaseapp.com",
    databaseURL: "https://waterapp-aa3d2.firebaseio.com",
    projectId: "waterapp-aa3d2",
    storageBucket: "waterapp-aa3d2.appspot.com",
    messagingSenderId: "319915755205"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    TapPage,
    TruckPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    UserprofilePage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    TapPage,
    ListPage,
    TruckPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    UserprofilePage
 
  ],
  providers: [
    StatusBar,
    Geolocation,
    NativeGeocoder,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProfileProvider,
    WaterServiceProvider,
    TapProvider,
    TruckProvider
  ]
})
export class AppModule {}
