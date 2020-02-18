import React from 'react';
import {connect} from 'react-redux';
import {sortCoins} from '../actions';

 function HeadingChange(props) {
  return (
    
      <th onClick={()=> props.sortParamChange(props.sortParam === 'percent_change_24h_asc' ? 'percent_change_24h_desc' : 'percent_change_24h_asc')}>Change (24h)</th>
    
  )
}



export default connect(null,{sortCoins})(React.memo(HeadingChange));