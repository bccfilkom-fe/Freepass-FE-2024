import { Artist } from "@models/artist/Artist";
import { SearchResultItem } from "./SearchResultItem";
import { Album } from "@models/album/Album";
import { PlaylistById } from "@models/playlist/PlaylistById";

export interface SearchResult {
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SearchResultItem[];
  };
  artists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Artist[];
  };
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Album[];
  };
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: PlaylistById[];
  };
  shows: any;
  episodes: any;
  audiobooks: any;
}
