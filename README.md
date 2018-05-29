# nativescript-conekta [Deprecated]

Conekta nativescript-conekta allows tokenize (encrypt) the data of the card of your final user

Plese use: https://github.com/happones/nativescript-conekta

## Installation


```javascript
tns plugin add nativescript-conekta
```
## Support

It only supports Android, but it is working on the iOS plugin.

## Use

The plugin is relatively simple, simply add the reference Conekta, create an object and pass the data to tokenize.

NOTE: It is your responsibility to validate the card.

```javascript
import { Conekta } from 'nativescript-conekta';

....

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
```
