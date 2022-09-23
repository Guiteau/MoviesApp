import { Result } from "./result-popular";

export interface RootObject {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}