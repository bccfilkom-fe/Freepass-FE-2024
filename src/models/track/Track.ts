import { ExternalUrls } from "@models/ExternalUrls";
import { Image } from "@models/Image";
import { Restriction } from "@models/Restriction";
import { Type } from "@models/type/Type";
import { Artist } from "./Artist";

export interface Track {
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
