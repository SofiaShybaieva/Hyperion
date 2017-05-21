import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ParametersPage } from '../parameters/parameters';
import { PhotoPage } from '../photo/photo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ParametersPage;
  tab3Root = PhotoPage;

  constructor() {

  }
}
