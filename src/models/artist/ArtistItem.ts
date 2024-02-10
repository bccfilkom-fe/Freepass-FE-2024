import { ExternalUrls } from "@models/ExternalUrls";
import { Image } from "@models/Image";
import { Type } from "@models/type/Type";
import { Followers } from "@models/user/Followers";

export interface ArtistItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: Type;
  uri: string;
}
