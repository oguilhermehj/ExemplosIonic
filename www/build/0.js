webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraFotosPageModule", function() { return MostraFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MostraFotosPageModule = /** @class */ (function () {
    function MostraFotosPageModule() {
    }
    MostraFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */]),
            ],
        })
    ], MostraFotosPageModule);
    return MostraFotosPageModule;
}());

//# sourceMappingURL=mostra-fotos.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MostraFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostraFotosPage = /** @class */ (function () {
    function MostraFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.array = [];
    }
    MostraFotosPage.prototype.ionViewDidLoad = function () {
        localStorage.setItem('listaImagens', "");
        this.proximaFoto();
    };
    MostraFotosPage.prototype.proximaFoto = function () {
        var _this = this;
        this.httpRequest.getFotoRandomica().subscribe(function (data) {
            //Aplicando o retorno
            console.log(data.url);
            _this.UrlImgRandom = data.url;
            _this.array.push(data.url);
            localStorage.setItem('listaImagens', JSON.stringify(_this.array));
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    MostraFotosPage.prototype.imagemAnterior = function () {
        this.UrlImgRandom = this.array[this.array.indexOf(this.UrlImgRandom)];
        // pega a última imagem armazenada
        // controla posição da coleção
    };
    MostraFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mostra-fotos',template:/*ion-inline-start:"C:\Users\Guilherme\Desktop\ExemplosIonic\src\pages\mostra-fotos\mostra-fotos.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mostra Fotos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-img width="200" height="300" src="{{ UrlImgRandom }}"></ion-img>\n\n    </ion-row>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button outline (click)="imagemAnterior()">Anterior</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button outline (click)="proximaFoto()">Próximo</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Guilherme\Desktop\ExemplosIonic\src\pages\mostra-fotos\mostra-fotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], MostraFotosPage);
    return MostraFotosPage;
}());

//# sourceMappingURL=mostra-fotos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map