import { DUMMY } from "./types";
import { SORT_COINS } from "./types";
import {FETCHCOINDETAILS} from './types'

 export const dummyDataCreator = dummydata => {
  return { type: DUMMY, payload: dummydata.data };
};  

export const sortCoins = sortParam => {
  return { type: SORT_COINS, payload: sortParam };
};

  export const fetchCoinDetails = id => async dispatch => {
  /* const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "f80e636f-5f3e-4346-9043-ecc2824f0f6e"
      }
    }
  ).then(res => res.json());

  dispatch({ type: FETCHCOINDETAILS, payload: response }); */
  }  
 
  /* export const dummyDataCreator = (pageNumber) => async dispatch => {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${pageNumber}&limit=100&convert=USD`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "f80e636f-5f3e-4346-9043-ecc2824f0f6e"
      }
    }
  ).then(res => res.json());

  console.log(response);

  dispatch({ type: DUMMY, payload: response.data });
}; */
 