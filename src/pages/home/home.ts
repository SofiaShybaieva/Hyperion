import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParametersPage } from '../parameters/parameters'; 

@Component({
  selector: 'home',
  templateUrl: 'Home.html'

})
export class HomePage {

  parametersPage = ParametersPage;
  
  constructor(public navCtrl: NavController) {

  }
}

  


