import React, { useEffect, useState } from "react";
import { dummy } from "../dummy";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { dummyDataCreator, fetchCoinDetails } from "../actions";
import Table from "./Table";
import Pagination from "./Pagination";
import CoinDetail from "./CoinDetail";

function App(props) {
  const [pageNumberForApiCall, setPageNumberForApiCall] = useState(1);
  const [showCoinDetail, setShowCoinDetail] = useState(0);

  const changePageNumberForApiCall = num => {
    setPageNumberForApiCall((num - 1) * 100 + 1);
  };

  const changeIdForCoinDetail = id => {
    setShowCoinDetail(id);
  };

  if (process.env.NODE_ENV !== "production") {
    const { whyDidYouUpdate } = require("why-did-you-update");
    whyDidYouUpdate(React);
  }
  console.log(showCoinDetail);
  /* props.dummyDataCreator(dummy); */

   useEffect(() => {props.dummyDataCreator(pageNumberForApiCall)}, [pageNumberForApiCall, props]) 
   useEffect(() => {if(showCoinDetail){ props.fetchCoinDetails(showCoinDetail)} }, [props, showCoinDetail])   

  /* useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD&sort=price&sort_dir=desc",{
        headers:{
          'X-CMC_PRO_API_KEY': 'f80e636f-5f3e-4346-9043-ecc2824f0f6e'
        }
      }
      
    )
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);  
  */
  /* if (!showCoinDetail) {
    return (
      <div>
       
        <Pagination changePageNumberForApiCall={changePageNumberForApiCall} />
        <Table changeIdForCoinDetail={changeIdForCoinDetail} />
      </div>
    );
  } else {
    return (
      <div>
        <CoinDetail showCoinDetail={showCoinDetail} />
      </div>
    );
  } */

  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact render={() => <Pagination  changePageNumberForApiCall={changePageNumberForApiCall}/>}/>
        <Route path="/" exact render={() => <Table changeIdForCoinDetail={changeIdForCoinDetail}/>}/>
        <Route path="/:id" render={(props) =>  <CoinDetail {...props} showCoinDetail={showCoinDetail} changeIdForCoinDetail={changeIdForCoinDetail}/>} />
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { dummyDataCreator, fetchCoinDetails })(App);

 {/* <div>
    <BrowserRouter>
    <Route
  path='/' exact
  render={(props) => <Pagination  changePageNumberForApiCall={changePageNumberForApiCall}/>}
/>
<Route
  path='/' exact
  render={(props) => <Table  changeIdForCoinDetail={changeIdForCoinDetail}/>}
/> */}