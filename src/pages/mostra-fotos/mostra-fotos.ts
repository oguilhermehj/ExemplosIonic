  import { HttpRequestProvider } from './../../providers/http-request/http-request';
  import { Component } from '@angular/core';
  import { IonicPage, NavController, NavParams } from 'ionic-angular';

  /**
   * Generated class for the MostraFotosPage page.
   *
   * See https://ionicframework.com/docs/components/#navigation for more info on
   * Ionic pages and navigation.
   */

  @IonicPage()
  @Component({
    selector: 'page-mostra-fotos',
    templateUrl: 'mostra-fotos.html',
  })
  export class MostraFotosPage {

    public UrlImgRandom: String;
    private array:Array<String> = [];

    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public httpRequest: HttpRequestProvider) { }

      ionViewDidLoad() {
      localStorage.setItem('listaImagens', "");
      this.proximaFoto();
    }

    proximaFoto(){
      this.httpRequest.getFotoRandomica().subscribe(
        data => {
          //Aplicando o retorno
          console.log(data.url);
          this.UrlImgRandom = data.url;
          this.array.push(data.url);
          localStorage.setItem('listaImagens', JSON.stringify(this.array));
        },
        error =>{
          console.log("ERRO: "+ error);
        })
    }

    imagemAnterior(){
      this.UrlImgRandom = this.array[this.array.indexOf(this.UrlImgRandom)];
      // pega a última imagem armazenada
      // controla posição da coleção
    }

  }
