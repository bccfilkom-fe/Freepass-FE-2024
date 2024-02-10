import { Seed } from "./Seed";
import { Track } from "./track/Track";

export interface Recommendation {
  seeds: Seed[];
  tracks: Track[];
}
