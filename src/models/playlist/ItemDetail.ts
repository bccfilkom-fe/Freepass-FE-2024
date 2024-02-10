import { AddedBy } from "./AddedBy";
import { Track } from "@models/track/Track";

export interface ItemDetail {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  track: Track;
}
