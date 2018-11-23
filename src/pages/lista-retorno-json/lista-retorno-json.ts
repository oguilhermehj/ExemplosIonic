import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-retorno-json',
  templateUrl: 'lista-retorno-json.html',
})
export class ListaRetornoJsonPage {

  fakeList: Array<{
    userId:String;
    id:String;
    title:String;
    body:String;
  }>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRetornoJsonPage');
    this.httpRequest.getFakeLista().subscribe(
      data => {
        // tratando retorno JSON
        const obj = (data as any);
        const objJSON = JSON.parse(obj._body);
        console.log(objJSON);
        this.fakeList = JSON.parse(obj._body);
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

}
