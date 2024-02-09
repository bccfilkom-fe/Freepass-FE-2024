import { ExternalIds } from "@models/ExternalIds";
import { ExternalUrls } from "@models/ExternalUrls";
import { Image } from "@models/Image";
import { Restriction } from "@models/Restriction";
import { Artist } from "@models/track/Artist";
import { Type } from "@models/type/Type";

export interface TrackAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restriction;
  type: Type;
  uri: string;
  artists: Artist[];
}
export interface TrackById{
    album: TrackAlbum;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: {};
    restrictions: Restriction;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: Type;
    uri: string;
    is_local: boolean;
  };
