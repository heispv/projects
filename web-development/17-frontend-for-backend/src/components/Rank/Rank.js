import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 ">
        {name + " you've used this app for " + entries + " time(s)"}
      </div>
    </div>
  );

}

export default Rank;