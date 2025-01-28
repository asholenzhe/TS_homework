declare module 'stats' {
    type TComparator<T> = (a: T, b: T) => number;
    export function getMaxIndex<T>(input: T[], comparator: TComparator<T>): number;
    export function getMaxElement<T>(input: T[], comparator: TComparator<T>): number | null;
    export function getMinIndex<T>(input: T[], comparator: TComparator<T>): number;
    export function getMinElement<T>(input: T[], comparator: TComparator<T>): number | null;
    export function getMedianIndex <T>(input: T[], comparator: TComparator<T>): number;
    export function getMedianElement<T> (input: T[], comparator: TComparator<T>): number | null;
    export function getAverageValue<T>(input: T[], getValue: (item: T) => number): number | null;
}
