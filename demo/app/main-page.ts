import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

import { Conekta } from 'nativescript-conekta';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

exports.token = function() {
    this.conekta = new Conekta();

    this.conekta.createToken(
    "Fulanito Pérez",
    "4242424242424242",
    "332",
    "11",
    "2020",
    "PUBLIC_KEY") // Ignorar siempre al hacer commit
    .then(function (token) {
        console.log("Token: " + token);
    },
    function(e) {
        console.log(e);
    });
    
};
 