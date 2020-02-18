import React from "react";
import {connect} from 'react-redux';
import {sortCoins} from '../actions';

function HeadingSupply(props) {
  return <th onClick={()=> props.sortCoins({sort:'circulating_supply', sortDir:'asc'})}>Circulating Supply</th>;
}

export default connect(null,{sortCoins})(React.memo(HeadingSupply));
