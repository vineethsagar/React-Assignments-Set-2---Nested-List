import React, { useState } from "react";
import City from "./City";
const State = (props) => {
  const [displayCity, setdisplayCity] = useState(false);
  // console.log(props);
  const cities = props.state.cities;
  console.log(cities);
  return (
    <>
      <button
        style={{ marginLeft: "40px", padding: "15px" }}
        id={"state" + props.id}
        onClick={() => setdisplayCity(!displayCity)}
      >
        {props.id}. {props.state.name}
      </button>
      {displayCity &&
        cities.map((city, index) => {
          return <City key={index + 1} id={index + 1} city={city} />;
        })}
    </>
  );
};
export default State;
