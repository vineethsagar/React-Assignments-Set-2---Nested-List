import React, { useState } from "react";
import City from "./City";
const State = (props) => {
  const [displayCity, setdisplayCity] = useState(false);
  // console.log(props);
  const cities = props.state.cities;
  console.log(cities);
  return (
    <>
      <li id={"state" + props.id} onClick={() => setdisplayCity(!displayCity)}>
        {props.id}. {props.state.name}
      </li>
      {displayCity &&
        cities.map((city, index) => {
          return (
            <div>
              <City key={index + 1} id={index + 1} city={city} />{" "}
            </div>
          );
        })}
    </>
  );
};
export default State;
