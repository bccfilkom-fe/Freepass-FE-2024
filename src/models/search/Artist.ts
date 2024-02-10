import { ExternalUrls } from "@models/ExternalUrls";
import { Type } from "@models/type/Type";

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: Type;
  uri: string;
}
