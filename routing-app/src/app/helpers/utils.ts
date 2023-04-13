export default class Utils {
    static replaceInputNumber(input: string) : string {
        if (input.charAt(0) === '0' && input.length > 1) {
            return input.slice(1 , input.length);
        }
        return input;
    }

    static incrementWholeNumber(input: any): number{
        if (typeof input === 'string' || typeof input === 'number') {
            if (typeof input === 'string') {
                return parseInt(input) + 1;
            } else if (typeof input === 'number') {
                return input + 1;
            }
        }
        return -999;
    }

    static decrementWholeNumber(input: any): number{
        if (typeof input === 'string' || typeof input === 'number') {
            if (typeof input === 'string') {
                return parseInt(input) - 1;
            } else if (typeof input === 'number') {
                return input - 1;
            }
        }
        return -999;
    }
}