import React from 'react';
import {connect} from 'react-redux';

function CoinDetail({coinDetail, showCoinDetail}) {
  if(Object.entries(coinDetail).length === 0 && coinDetail.constructor === Object) {
  
  return (
    <div>
      Geliyom
    </div>
  )
} else {
  console.log(coinDetail.data[showCoinDetail])
return <div>{coinDetail.data[showCoinDetail].name}</div>

}
}

const mapStateToProps = state => {
  return {coinDetail : state.coinDetail};
}

export default connect(mapStateToProps)(React.memo(CoinDetail))
