import { Artist } from "@models/search/Artist";
import { ExternalUrls } from "@models/ExternalUrls";
import { Image } from "@models/Image";
import { Restriction } from "@models/Restriction";
import { AlbumType } from "@models/type/AlbumType";
import { Type } from "@models/type/Type";

export interface Album {
  album_type: AlbumType;
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
