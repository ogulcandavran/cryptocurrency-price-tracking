import React, { useEffect, useState } from "react";
import { dummy } from "../dummy";
import { connect } from "react-redux";
import { dummyDataCreator } from "../actions";
import Table from './Table';
import Pagination from "./Pagination";




function App(props) {
const[pageNumberForApiCall, setPageNumberForApiCall] = useState(1);

const changePageNumberForApiCall = (num) => {
  setPageNumberForApiCall((num - 1) * 100 + 1);
}

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
console.log(pageNumberForApiCall)
   props.dummyDataCreator(dummy); 
 
   /* useEffect(() => {props.dummyDataCreator(pageNumberForApiCall)}, [pageNumberForApiCall])  */


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
  return (
  <div>
    <Table />
    
  <Pagination changePageNumberForApiCall={changePageNumberForApiCall}/>
  </div>
  );
}

export default connect(null, { dummyDataCreator })(App);
