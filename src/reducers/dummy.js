import orderBy from "lodash/orderBy";
import { SORT_COINS, DUMMY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SORT_COINS:
      
      switch (action.payload) {
        case "percent_change_24h_desc":
          return [...state].sort(function(a, b) {
            return (
              b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h
            );
          });
        case "percent_change_24h_asc":
          return [...state].sort(function(a, b) {
            return (
              a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h
            );
          });
        case "circulating_supply_desc":
          return [...state].sort(function(a, b) {
            return b.circulating_supply - a.circulating_supply;
          });
        case "circulating_supply_asc":
          return [...state].sort(function(a, b) {
            return a.circulating_supply - b.circulating_supply;
          });
        case "name_desc":
          return orderBy([...state], ["name"], ["desc"]);
        case "name_asc":
          return orderBy([...state], ["name"], ["asc"]);

        case "market_cap_desc":
          return [...state].sort(function(a, b) {
            return b.quote.USD.market_cap - a.quote.USD.market_cap;
          });
        case "market_cap_asc":
          return [...state].sort(function(a, b) {
            return a.quote.USD.market_cap - b.quote.USD.market_cap;
          });
        case "price_desc":
          return [...state].sort(function(a, b) {
            return b.quote.USD.price - a.quote.USD.price;
          });
        case "price_asc":
          return [...state].sort(function(a, b) {
            return a.quote.USD.price - b.quote.USD.price;
          });
        case "volume_24h_desc":
          return [...state].sort(function(a, b) {
            return b.quote.USD.volume_24h - a.quote.USD.volume_24h;
          });
        case "volume_24h_asc":
          return [...state].sort(function(a, b) {
            return a.quote.USD.volume_24h - b.quote.USD.volume_24h;
          });
        default:
          return state;
      }

    case DUMMY:
      return action.payload;
    default:
      return state;
  }
};
