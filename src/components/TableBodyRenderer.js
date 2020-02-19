import React from "react";
import { Link } from "react-router-dom";

function TableBodyRenderer({ freshData,changeIdForCoinDetail }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return freshData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.cmc_rank}</td>
        <td onClick={() => changeIdForCoinDetail(row.id)}><Link to={`/${row.name}`}>{row.name}</Link></td>
        <td>{formatter.format(row.quote.USD.market_cap)}</td>
        <td>${row.quote.USD.price.toFixed(4)}</td>
        <td>{formatter.format(row.quote.USD.volume_24h.toFixed(2))}</td>
        <td>{row.circulating_supply.toFixed(2)}</td>
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
}
export default React.memo(TableBodyRenderer);
