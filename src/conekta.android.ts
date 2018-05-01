import * as app from "tns-core-modules/application";

import { Common } from './conekta.common';

declare const io, org: any;

export class Conekta extends Common {

    createToken(name: string, numberCard: string, cvc: string, expMonth: string, expYear: string, publicKey: string): Promise<string> {   
        return new Promise(function (resolve, reject) {

            let activity = app.android.startActivity || app.android.foregroundActivity;
            let mToken: string = null;

            io.conekta.conektasdk.Conekta.setPublicKey(publicKey);
            io.conekta.conektasdk.Conekta.setApiVersion("1.0.0");
            io.conekta.conektasdk.Conekta.collectDevice(activity); 

            var card = new io.conekta.conektasdk.Card(name, numberCard, cvc, expMonth, expYear);
            var token = new io.conekta.conektasdk.Token(activity);
            
            token.onCreateTokenListener(new io.conekta.conektasdk.Token.CreateToken({
                    onCreateTokenReady: function(data: org.json.JSONObject) {
                        try {
                            resolve(data.getString("id"));
                        } catch(e) {
                            reject(e);
                        }
                    }
                })
            );

            token.create(card);
        });
    }
}