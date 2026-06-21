import { icon } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export function svgIcon(def: IconDefinition): string {
  return icon(def).html[0];
}
