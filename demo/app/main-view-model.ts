import { Observable } from 'tns-core-modules/data/observable';

import { Conekta, ConektaOptions } from 'nativescript-conekta';

export class HelloWorldModel extends Observable {

    private conekta: Conekta;

    constructor() {
        super();
    }

    createToken() {
        this.conekta = new Conekta();

        let options:ConektaOptions = {
          name: "Fulanito Pérez",
          numberCard: "4242424242424242",
          cvc: "332",
          expMonth: "11",
          expYear: "2020",
          publicKey: "PUBLIC_KEY" // Se obtiene desde la plataforma de Conekta
        }

        this.conekta.createToken(options).then(function (token) {
            console.log("Token: " + token);
        },
        function(e) {
            console.log(e);
        });

    };
}
