import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';

@Component({
  selector: 'parameters',
  templateUrl: 'parameters.html'
})
export class ParametersPage {

  photoPage = PhotoPage;
  constructor(public navCtrl: NavController) {

  }

}
