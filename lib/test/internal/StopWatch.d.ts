export declare namespace StopWatch {
    type Task = () => Promise<void>;
    function measure(task: Task): Promise<number>;
    function trace(title: string, task: Task): Promise<void>;
}
