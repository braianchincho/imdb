export interface ResponseModel<T> {
    searchType?: string;
    expression?: string;
    results?: T[]; 
    errorMessage?: string;
}