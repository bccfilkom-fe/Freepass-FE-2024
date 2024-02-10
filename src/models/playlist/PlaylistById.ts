import { ExternalUrls } from "@models/ExternalUrls"
import { Image } from "@models/Image"
import { Followers } from "@models/user/Followers"
import { Owner } from "./Owner"
import { TracksById } from "./Tracks"

export interface PlaylistById{
    collaborative: boolean,
    description: string,
    external_urls: ExternalUrls
    followers: Followers
    href: string,
    id: string,
    images: Image[]
    name: string,
    owner: Owner
    public: boolean,
    snapshot_id: string,
    tracks: TracksById
    type: string,
    uri: string
  }