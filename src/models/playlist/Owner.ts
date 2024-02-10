import { ExternalUrls } from "@models/ExternalUrls";
import { Type } from "@models/type/Type";
import { Followers } from "@models/user/Followers";

export interface Owner {
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  type: Type;
  uri: string;
  display_name: string;
}
