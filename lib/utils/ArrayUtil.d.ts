export declare namespace ArrayUtil {
    function asyncFilter<Input>(elements: Input[], pred: (elem: Input, index: number, array: Input[]) => Promise<boolean>): Promise<Input[]>;
    function asyncForEach<Input>(elements: Input[], closure: (elem: Input, index: number, array: Input[]) => Promise<void>): Promise<void>;
    function asyncMap<Input, Output>(elements: Input[], closure: (elem: Input, index: number, array: Input[]) => Promise<Output>): Promise<Output[]>;
    function asyncRepeat<T>(count: number, closure: (index: number) => Promise<T>): Promise<T[]>;
    function has<T>(elements: T[], pred: (elem: T) => boolean): boolean;
    function repeat<T>(count: number, closure: (index: number) => T): T[];
}
