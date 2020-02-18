import orderBy from "lodash/orderBy";

export default (state = {}, action) => {
  switch (action.type) {
    case "SORT_COINS":
      switch (action.payload) {
        
        case "percent_change_24h_desc":
          
          return [...state].sort(function (a, b) {
            return b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h;
          });
        case "percent_change_24h_asc":
            
          return [...state].sort(function (a, b) {
            return a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h;
          });
        default:
          return orderBy(
            [...state],
            [action.payload.sort],
            [action.payload.sortDir]
          );
      }

    case "DUMMY":
      return action.payload;
    default:
      return state;
  }
};
