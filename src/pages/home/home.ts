import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  paginaMostraFotos(){
    this.navCtrl.push('MostraFotosPage');
  }

  paginaListaRetornoJSON(){
    this.navCtrl.push('ListaRetornoJsonPage');
  } 
  paginaListaFotos(){
    this.navCtrl.push('ListaFotosPage');
  } 
}
