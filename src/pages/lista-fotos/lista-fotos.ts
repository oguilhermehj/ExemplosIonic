import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';

@IonicPage()
@Component({
  selector: 'page-lista-fotos',
  templateUrl: 'lista-fotos.html',
})
export class ListaFotosPage {

  listaFotos: Array<{
    id:String;
    author:String;
    author_url:String;
    filename:String;
    format:String;
    height:String;
    post_url:String;
    width:String;
  }>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFotosPage');
    this.httpRequest.getFotosLista().subscribe(
      data => {
        // tratando retorno JSON
        const obj = (data as any);
        this.listaFotos = JSON.parse(obj._body);
       console.log(this.listaFotos);
       console.log(JSON.stringify(data));
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

}
