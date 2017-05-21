import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  selector: 'photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {

  public base64Image;

  constructor(public navCtrl: NavController) {

  }
  fromCamera(){
    Camera.getPicture({
         destinationType: Camera.DestinationType.DATA_URL
        // targetWidth: 1000,
        // targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = imageData
    }, (err) => {
        console.log(err);
    });
  }

  fromGallery(){
  	Camera.getPicture({
  		sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  		//destinationType: Camera.DestinationType.FILE_URI
  	}).then((imageData) => {
        this.base64Image = imageData
        alert(imageData)
    }, (err) => {
        console.log(err);
    });

  }


}
