import { ItemById } from "./Item";

export interface Tracks {
  href: string;
  total: number;
}
export interface TracksById {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: ItemById[];
}
