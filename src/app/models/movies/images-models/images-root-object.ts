import { Backdrop } from "./backdrop-images";
import { Logo } from "./logo-images";
import { Poster } from "./poster-images";

export interface RootObject {
    backdrops: Backdrop[];
    id: number;
    logos: Logo[];
    posters: Poster[];
}