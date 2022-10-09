export declare namespace DynamicImportIterator {
    type Closure<Arguments extends any[]> = (...args: Arguments) => Promise<void>;
    interface IOptions<Parameters extends any[]> {
        prefix: string;
        parameters: Parameters;
        wrapper?: (name: string, closure: Closure<Parameters>) => Promise<void>;
        showElapsedTime?: boolean;
    }
    function main<Arguments extends any[]>(path: string, options: IOptions<Arguments>): Promise<void>;
    function force<Arguments extends any[]>(path: string, options: IOptions<Arguments>): Promise<Error[]>;
}
