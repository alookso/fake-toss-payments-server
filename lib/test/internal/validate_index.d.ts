interface IEntity {
    id: string;
}
export declare function validate_index<Solution extends IEntity, Summary extends IEntity>(symbol: string, solution: Solution[], summaries: Summary[]): void;
export {};
