import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function CoinDetail({coinDetail, showCoinDetail}) {
  if((Object.entries(coinDetail).length === 0 && coinDetail.constructor === Object) || !coinDetail.data[showCoinDetail]) {
  
  return (
    <div>
     <Link to='/'>HOMEPAGEEEEEEEEEEEEEEEEEEEEEEEEE</Link> Geliyom
    </div>
  )
} else {
  console.log(showCoinDetail)
  console.log(coinDetail)
return <div>{coinDetail.data[showCoinDetail].name}   <Link to='/'>HOMEPAGEEEEEEEEEEEEEEEEEEEEEEEEE</Link></div>

}
}

const mapStateToProps = state => {
  return {coinDetail : state.coinDetail};
}

export default connect(mapStateToProps)(React.memo(CoinDetail))
