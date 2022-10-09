export declare namespace RandomGenerator {
    function name(length?: number): string;
    function date(from: Date, range: number): Date;
    function mobile(): string;
    function digit(minC: number, maxC: number): string;
    function cardNumber(): string;
}
