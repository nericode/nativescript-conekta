import { Common } from './conekta.common';

export class Conekta extends Common {
    get() {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
}
