import React, { useEffect, useState } from "react";
import { dummy } from "../dummy";
import { connect } from "react-redux";
import { dummyDataCreator } from "../actions";
import Table from './Table';




function App(props) {
const[count, setCount] = useState(0);


if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

  props.dummyDataCreator(dummy);



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
  return <div><Table /></div>;
}

export default connect(null, { dummyDataCreator })(App);
