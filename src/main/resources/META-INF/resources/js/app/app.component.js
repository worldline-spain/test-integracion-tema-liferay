var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router"], function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(router) {
            this.router = router;
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
            this.clicks = 0;
            this.msgs = [];
            router.navigate(['home'], { skipLocationChange: true });
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
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.items = [
                { label: 'Update', icon: 'fa-refresh', command: function () {
                        _this.update();
                    } },
                { label: 'Delete', icon: 'fa-close', command: function () {
                        _this.delete();
                    } },
                { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
                { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
            ];
        };
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
        AppComponent.prototype.count = function () {
            this.clicks++;
        };
        AppComponent.prototype.save = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        };
        AppComponent.prototype.update = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'warning', summary: 'Success', detail: 'Data Updated' });
        };
        AppComponent.prototype.delete = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'danger', summary: 'Success', detail: 'Data Deleted' });
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/test-integracion-tema/js/app/app.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map