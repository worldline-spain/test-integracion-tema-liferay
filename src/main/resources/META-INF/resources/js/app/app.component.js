var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent() {
            this.countries = ['Albania', 'Alemania', 'Andorra', 'Armenia', 'Austria', 'Azerbaiyán', 'Bélgica', 'Bielorrusia', 'Bosnia y Herzegovina',
                'Bulgaria', 'Chipre', 'Ciudad del Vaticano', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia',
                'Finlandia', 'Francia', 'Georgia', 'Grecia', 'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Kazajistán', 'Letonia', 'Liechtenstein',
                'Lituania', 'Luxemburgo', 'Macedonia', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia',
                'Portugal', 'Reino Unido', 'República Checa', 'Rumanía', 'Rusia', 'San Marino', 'Serbia', 'Suecia', 'Suiza', 'Turquía', 'Ucrania'];
            this.countriesAdv = ['Albania', 'Alemania', 'Andorra', 'Armenia', 'Austria', 'Azerbaiyán', 'Bélgica', 'Bielorrusia', 'Bosnia y Herzegovina',
                'Bulgaria', 'Chipre', 'Ciudad del Vaticano', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia',
                'Finlandia', 'Francia', 'Georgia', 'Grecia', 'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Kazajistán', 'Letonia', 'Liechtenstein',
                'Lituania', 'Luxemburgo', 'Macedonia', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia',
                'Portugal', 'Reino Unido', 'República Checa', 'Rumanía', 'Rusia', 'San Marino', 'Serbia', 'Suecia', 'Suiza', 'Turquía', 'Ucrania'];
            this.checked1 = false;
            this.checked2 = false;
            this.selectedCars1 = [];
            console.log("constructor");
            this.cities = [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ];
            this.cars = [
                { label: 'Audi', value: 'Audi' },
                { label: 'BMW', value: 'BMW' },
                { label: 'Fiat', value: 'Fiat' },
                { label: 'Ford', value: 'Ford' },
                { label: 'Honda', value: 'Honda' },
                { label: 'Jaguar', value: 'Jaguar' },
                { label: 'Mercedes', value: 'Mercedes' },
                { label: 'Renault', value: 'Renault' },
                { label: 'VW', value: 'VW' },
                { label: 'Volvo', value: 'Volvo' }
            ];
            this.types = [
                { label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal' },
                { label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa' },
                { label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard' }
            ];
        }
        AppComponent.prototype.clear = function () {
            this.selectedType = null;
        };
        AppComponent.prototype.filterCountries = function (event) {
            //console.log("filtercountries method");
            this.filteredCountries = [];
            for (var i = 0; i < this.countries.length; i++) {
                var country = this.countries[i];
                if (country.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                    this.filteredCountries.push(country);
                }
            }
        };
        AppComponent.prototype.filterCountriesAdv = function (event) {
            //console.log("filtercountries method");
            this.filteredCountriesAdv = [];
            for (var i = 0; i < this.countriesAdv.length; i++) {
                var country = this.countriesAdv[i];
                if (country.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                    this.filteredCountriesAdv.push(country);
                }
            }
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/test-integracion-tema/js/app/app.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map