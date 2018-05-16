import { Common } from './conekta.common';

export declare class Conekta extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    createToken(options: ConektaOptions): Promise<string>;
}

export interface ConektaOptions {
    name: string;
    numberCard: string;
    cvc: string;
    expMonth: string;
    expYear: string;
    publicKey: string;
}
