import React from "react";
import { connect } from "react-redux";
import {useState, useEffect} from 'react';
import {sortCoins} from '../actions'

import TableBodyRenderer from "./TableBodyRenderer";
import Headings from './Headings'

function Table({ dummyData, sortCoins, changeIdForCoinDetail  }) {
  const[sortParam, setSortParam] = useState('');

  const sortParamChange = param => {
    setSortParam(param);
  }

  useEffect(() => {
    sortCoins(sortParam);
  }, [sortParam])

  if(Object.entries(dummyData).length === 0 && dummyData.constructor === Object){
    return <div>Loading</div>
  }else {
  return (
    <div style={{ width: "100%" }}>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Name' ascParameterString='name_asc' descParameterString='name_desc'/>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Market Cap' ascParameterString='market_cap_asc' descParameterString='market_cap_desc'/>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Price' ascParameterString='price_asc' descParameterString='price_desc'/>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Volume (24h)' ascParameterString='volume_24h_asc' descParameterString='volume_24h_desc'/>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Circulating Supply' ascParameterString='circulating_supply_asc' descParameterString='circulating_supply_desc'/>
            <Headings sortParamChange={sortParamChange} sortParam={sortParam} title='Change (24h)' ascParameterString='percent_change_24h_asc' descParameterString='percent_change_24h_desc'/>
          </tr>
          <TableBodyRenderer freshData={dummyData} changeIdForCoinDetail={changeIdForCoinDetail} />
        </tbody>
      </table>
    </div>
  );
}
}

function mapStateToProps(state) {
  return { dummyData: state.dummyData };
}

export default connect(mapStateToProps,{sortCoins})(React.memo(Table));
/* const dataRender = data => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return data.map((row, index) => {
    return (
      <tr>
        <td>{row.cmc_rank}</td>
        <td>{row.name}</td>
        <td>{formatter.format(row.quote.USD.market_cap)}</td>
        <td>{formatter.format(row.quote.USD.price.toFixed(2))}</td>
        <td>{formatter.format(row.quote.USD.volume_24h.toFixed(2))}</td>
        <td>{row.circulating_supply}</td>
        <td
          style={{
            color: row.quote.USD.percent_change_24h < 0 ? "red" : "green"
          }}
        >
          {row.quote.USD.percent_change_24h.toFixed(2)} %
        </td>
      </tr>
    );
  });
}; */
