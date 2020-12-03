import React, { useState } from "react";

const City = (props) => {
  const [displayTown, setdisplayTown] = useState(false);
  // console.log(props);
  const towns = props.city.towns;
  console.log(props);
  return (
    <>
      <h1 id={"city" + props.id} onClick={() => setdisplayTown(!displayTown)}>
        {props.id}. {props.city.name}
      </h1>
      {displayTown &&
        towns.map((town, index) => {
          const id = index + 1;

          return (
            <h1 id={"town" + id}>
              {index + 1}. {town.name}
            </h1>
          );
        })}
    </>
  );
};
export default City;
