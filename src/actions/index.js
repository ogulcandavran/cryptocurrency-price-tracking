import { DUMMY } from "./types";
import {SORT_COINS} from './types'

export const dummyDataCreator = dummydata => {
  return { type: DUMMY, payload: dummydata.data };
};

export const sortCoins = (sortParam) => {
  return {type : SORT_COINS, payload: sortParam}
}