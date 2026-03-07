import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    addCategory(name: string): Promise<void>;
    categoryExists(category: string): Promise<boolean>;
    getAllDownloadCounts(): Promise<Array<[bigint, bigint]>>;
    getCategories(): Promise<Array<string>>;
    getDownloadCount(id: bigint): Promise<bigint>;
    incrementDownloadCount(id: bigint): Promise<bigint>;
}
