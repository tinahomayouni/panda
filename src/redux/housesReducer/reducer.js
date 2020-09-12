import { FILTER_ADDRESS } from "./const"
import houses from "../../data/dataCard/dataCard.json";


const initialState = {
  filters: {
    image: false,
    confirmedItemsOnly: false,
    rooms: undefined,
    area: undefined,
    age: undefined,
    fullMortgage: false,
    budget: {
      rent: {
        min: undefined, max: undefined
      },
      mortgage: {
        min: undefined, max: undefined
      }
    },
    features: []
  },
  housesList: houses.houses,
  filteredHouses: []
}


function housesReducer(state = initialState, action) {

  switch (action.type) {
    case FILTER_ADDRESS:
      return {
        ...state,
        filters: action.filters,
        filteredHouses: filterHouses(action.filters, state.housesList)
      }
    default:
      return {
        ...state
      }
  }
}


// forEach filters => 
function filterHouses(filters, houses) {
  let filteredData = houses;
  Object.keys(filters).forEach(key => {
    console.log(key, "key");
    switch (key) {
      case 'image':
        {
          if (filters.image) {
            return filteredData = filteredData.filter(house => {
              if (house.image) return house;
              else return filteredData
            })
          } 
          break;
        }
      case 'room':
        {
          if (filters.room) {
            return filteredData = filteredData.filter(house => {
              const naturalOptions = house.option.reduce((total, opt) => {
                Object.keys(opt).forEach(key => total[key] = opt[key])
                return total;
              }, {})
              if (naturalOptions.room == filters.room) {
                console.log("heres");
                return house;
              }
            })
          } else {
            return filteredData
          }
          break;
        }

      default: return houses;
    }


  })
  console.log(filteredData, "filteredData");
  return filteredData;

}

export default housesReducer