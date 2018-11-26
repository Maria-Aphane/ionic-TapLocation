import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private nativeGeocoder: NativeGeocoder) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 100
    }).addTo(this.map);
  }
 
  addMarker() {
    let prompt = this.alertCtrl.create({
      title: 'Add Marker',
      message: "Enter location",
      inputs: [
        {
          name: 'city',
          placeholder: 'Pin a location'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            
            this.geoCodeandAdd(data.city);
          }
        }
      ]
    });
    prompt.present();
  }
 
  geoCodeandAdd(city) {
    this.nativeGeocoder.forwardGeocode(city)
      .then((coordinates: NativeGeocoderForwardResult[]) => {
        let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      })
  .catch((error: any) => console.log(error));
  }
 

}
