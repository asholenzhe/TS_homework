declare module 'str-utils' {
    type TransformerString = (value: string) => string;

    export const strReverse: TransformerString;
    export const strToLower: TransformerString;
    export const strToUpper: TransformerString;
    export const strRandomize: TransformerString;
    export const strInvertCase: TransformerString;
}



