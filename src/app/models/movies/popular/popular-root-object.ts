import { Movie } from "./movie";

export interface RootObject {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
    
}