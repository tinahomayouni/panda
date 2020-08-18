import { FILTER_ADDRESS } from "./const";

export function filterAddress(filters) {
  return {
    type: FILTER_ADDRESS,
    filters
  }
}
