export interface Store<T> {
    isLoading: boolean;
    data: RestApi<T> | null;
    error: string;
}

export interface RestApi<T> {
    current_page: number;
    data: Array<T>;
    first_page_url: string;
    from: number;
    to: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_age: string;
    prev_page_url: string | null; 
    total: number;
}