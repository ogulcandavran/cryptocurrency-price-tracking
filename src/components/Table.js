import React from "react";
import { connect } from "react-redux";
import {useState, useEffect} from 'react';
import {sortCoins} from '../actions'

import HeadingName from "./HeadingName";
import HeadingPrice from "./HeadingPrice";
import HeadingVolume from "./HeadingVolume";
import HeadingChange from "./HeadingChange";
import HeadingSupply from "./HeadingSupply";
import HeadingMarketCap from "./HeadingMarketCap";
import TableBodyRenderer from "./TableBodyRenderer";

function Table({ dummyData, sortCoins }) {
  const[sortParam, setSortParam] = useState('');

  const sortParamChange = param => {
    setSortParam(param);
  }

  useEffect(() => {
    sortCoins(sortParam);
  }, [sortParam])

  
  return (
    <div style={{ width: "100%" }}>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <HeadingName />
            <HeadingMarketCap />
            <HeadingPrice />
            <HeadingVolume />
            <HeadingSupply />
            <HeadingChange sortParamChange={sortParamChange} sortParam={sortParam}/>
          </tr>
          <TableBodyRenderer freshData={dummyData} />
        </tbody>
      </table>
    </div>
  );
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
