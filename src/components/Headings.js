import React from 'react'
import {connect} from 'react-redux';
import {sortCoins} from '../actions';

function Headings({title, ascParameterString, descParameterString, sortParamChange, sortParam}) {
return <th onClick={()=> sortParamChange(sortParam === ascParameterString ? descParameterString : ascParameterString)}>{title}</th>
}

export default connect(null,{sortCoins})(React.memo(Headings));