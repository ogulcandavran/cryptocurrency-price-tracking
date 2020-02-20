import React from "react";
import { connect } from "react-redux";
import { sortCoins } from "../actions";

function Headings({
  title,
  ascParameterString,
  descParameterString,
  sortParamChange,
  sortParam
}) {
  const showSortingDirection = () => {
    if (sortParam === ascParameterString) {
      return <span>a</span>;
    } else if (sortParam === descParameterString) {
      return <span>d</span>;
    } else {
      return null;
    }
  };

  return (
    <th
      onClick={() =>
        sortParamChange(
          sortParam === ascParameterString
            ? descParameterString
            : ascParameterString
        )
      }
    >
      {title} {showSortingDirection()}
    </th>
  );
}

export default connect(null, { sortCoins })(React.memo(Headings));
