import React from 'react'

export default function EachPage({pageNumberToShow, pageNumberForApiCall, changePageNumberForApiCall}) {
return <p style={{marginLeft: '10px'}} onClick={() => onClickHelper(pageNumberForApiCall,pageNumberToShow, changePageNumberForApiCall)}>{pageNumberToShow}</p>
    
  
}
/* {pageNumberForApiCall !== pageNumberToShow ? changePageNumberForApiCall(pageNumberToShow) : return} */
const onClickHelper= (pageNumberForApiCall,pageNumberToShow, changePageNumberForApiCall) => {
  if(pageNumberForApiCall !== pageNumberToShow) {
    changePageNumberForApiCall(pageNumberToShow);
  } 

  return;
}
