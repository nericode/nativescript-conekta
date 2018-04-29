# nativescript-conekta

Conekta nativescript-conekta permite tokenizar (encriptar) los datos de la tarjeta de tu usuario final

## Instalación (próximamente)

Actualmente se encuentra en desarrollo el plugin, pero se subira respectivamente al marketplace de nativescript:

```javascript
tns plugin add <nativescript-conekta>
```
## Soporte 

Solamente soporta Android, pero se esta trabajando en el plugin para iOS.

## Uso 

El plugin es relativamente sencillo, simplemente agrega la referencia Conekta, crea un objeto y pasa los datos a tokenizar. 

NOTA: Es responsabilidad tuya validar la tarjeta.
	
```javascript
import { Conekta } from 'nativescript-conekta';

....

this.conekta = new Conekta();

this.conekta.createToken(
"Fulanito Pérez",
"4242424242424242",
"332",
"11",
"2020",
"PUBLIC_KEY") // Se obtiene desde la plataforma de Conekta
.then(function (token) {
    console.log("Token: " + token);
},
function(e) {
    console.log(e);
});
```

## Licencia

Sin licencia
