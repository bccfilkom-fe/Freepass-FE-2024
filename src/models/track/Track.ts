import { ExternalIds } from "@models/ExternalIds";
import { ExternalUrls } from "@models/ExternalUrls";
import { Restriction } from "@models/Restriction";
import { Artist } from "@models/artist/Artist";
import { Type } from "@models/type/Type";
import { TrackAlbum } from "./TrackAlbum";

export interface Track {
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
}
