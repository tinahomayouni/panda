import { FILTER_HOUSES } from './const'

export const filterHouses = (filters) => {

  console.log(filters, "filters in action")
  return {
    type: FILTER_HOUSES,
    filters
  }
}