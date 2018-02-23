import { Component } from '@angular/core';
import { SelectItem } from 'primeng-wl/primeng';

interface City {
    name: string,
    code: string
} 

@Component({ 
	selector: 'app',
	templateUrl: '/o/test-integracion-tema/js/app/app.html'
})
export class AppComponent {
       

	countries: string[] = ['Albania','Alemania','Andorra','Armenia','Austria','Azerbaiyán','Bélgica','Bielorrusia','Bosnia y Herzegovina',
        'Bulgaria','Chipre','Ciudad del Vaticano','Croacia','Dinamarca','Eslovaquia','Eslovenia','España','Estonia',
        'Finlandia','Francia','Georgia','Grecia','Hungría','Irlanda','Islandia','Italia','Kazajistán','Letonia','Liechtenstein',
        'Lituania','Luxemburgo','Macedonia','Malta','Moldavia','Mónaco','Montenegro','Noruega','Países Bajos','Polonia',
        'Portugal','Reino Unido','República Checa','Rumanía','Rusia','San Marino','Serbia','Suecia','Suiza','Turquía','Ucrania'];

    filteredCountries: any[];
    
    countriesAdv: string[] = ['Albania','Alemania','Andorra','Armenia','Austria','Azerbaiyán','Bélgica','Bielorrusia','Bosnia y Herzegovina',
        'Bulgaria','Chipre','Ciudad del Vaticano','Croacia','Dinamarca','Eslovaquia','Eslovenia','España','Estonia',
        'Finlandia','Francia','Georgia','Grecia','Hungría','Irlanda','Islandia','Italia','Kazajistán','Letonia','Liechtenstein',
        'Lituania','Luxemburgo','Macedonia','Malta','Moldavia','Mónaco','Montenegro','Noruega','Países Bajos','Polonia',
        'Portugal','Reino Unido','República Checa','Rumanía','Rusia','San Marino','Serbia','Suecia','Suiza','Turquía','Ucrania'];

    filteredCountriesAdv: any[];
    
    cities: City[];

    selectedCity: City;

    text: string;
    text1: string;

    checked1: boolean = false;
    checked2: boolean = false;

    val1: string;
    val2: string;
    val3: string;
    val4: number;
    val5: number;
    
    value: any;

    cars: SelectItem[];

    selectedCars1: string[] = [];

    types: SelectItem[];
    selectedType: string;

    constructor() {
        console.log("constructor");

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        this.types = [
            {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
            {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
            {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
        ];
    }

    clear() {
        this.selectedType = null;      
    }

	filterCountries(event:any) {
		//console.log("filtercountries method");
        this.filteredCountries = [];
        for(let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if(country.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredCountries.push(country);
            }
        }
    }
    
    filterCountriesAdv(event:any) {
		//console.log("filtercountries method");
        this.filteredCountriesAdv = [];
        for(let i = 0; i < this.countriesAdv.length; i++) {
            let country = this.countriesAdv[i];
            if(country.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredCountriesAdv.push(country);
            }
        }
	}
	
}

