import React from 'react'
import EachPage from './EachPage';

 function Pagination({changePageNumberForApiCall}) {
  return (
    <div style={{display:'flex'}}>
      <EachPage changePageNumberForApiCall={changePageNumberForApiCall} pageNumberToShow={1}/>
      <EachPage changePageNumberForApiCall={changePageNumberForApiCall} pageNumberToShow={2}/>
      <EachPage changePageNumberForApiCall={changePageNumberForApiCall} pageNumberToShow={3}/>
      <EachPage changePageNumberForApiCall={changePageNumberForApiCall} pageNumberToShow={4}/>
    </div>
  )
}

export default React.memo(Pagination)
