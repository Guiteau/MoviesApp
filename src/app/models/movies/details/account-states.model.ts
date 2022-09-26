import { Rated } from "./rated.model";

export interface AccountStates {
    id: number;
    favorite: boolean;
    rated: Rated;
    watchlist: boolean;
}
