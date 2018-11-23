webpackJsonp([2],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFotosPageModule", function() { return ListaFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_fotos__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaFotosPageModule = /** @class */ (function () {
    function ListaFotosPageModule() {
    }
    ListaFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */]),
            ],
        })
    ], ListaFotosPageModule);
    return ListaFotosPageModule;
}());

//# sourceMappingURL=lista-fotos.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaFotosPage = /** @class */ (function () {
    function ListaFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
    }
    ListaFotosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ListaFotosPage');
        this.httpRequest.getFotosLista().subscribe(function (data) {
            // tratando retorno JSON
            var obj = data;
            _this.listaFotos = JSON.parse(obj._body);
            console.log(_this.listaFotos);
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    ListaFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-fotos',template:/*ion-inline-start:"C:\Users\Guilherme\Desktop\ExemplosIonic\src\pages\lista-fotos\lista-fotos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Lista Fotos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let foto of listaFotos">\n\n        {{foto.id}}\n\n        <ion-card>\n\n            <div class="card-title">Nome do Arquivo: {{foto.filename}}</div>\n\n            <div class="card-subtitle">URL: <a href="{{ foto.post_url }}" >{{ foto.post_url }}</a></div>\n\n            <div class="card-subtitle">Autor: <a href="{{ foto.author_url }}">{{ foto.author }}</a></div>\n\n            <div class="card-subtitle">Tamanho: {{ foto.height}} x {{ foto.width}} </div>\n\n        </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Guilherme\Desktop\ExemplosIonic\src\pages\lista-fotos\lista-fotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], ListaFotosPage);
    return ListaFotosPage;
}());

//# sourceMappingURL=lista-fotos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map