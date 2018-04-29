import { Common } from './conekta.common';

export declare class Conekta extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    // createToken(name: string, numberCard: string, cvc: string, expMonth: string, expYear: string, publicKey: string): string;
    createToken(name: string, numberCard: string, cvc: string, expMonth: string, expYear: string, publicKey: string): Promise<string>;
}
