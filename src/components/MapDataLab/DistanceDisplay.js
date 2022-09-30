import React from "react";

//displays current distance between points selected
export default function DistanceDisplay(props) {
  let lastLocation = null;

  let totalDistance = props.locations.reduce((accumlator, location) => {
    let dist = 0;

    if (lastLocation !== null) {
      let dx = location.position.x - lastLocation.position.x;
      let dy = location.position.y - lastLocation.position.y;
      dist = Math.sqrt(dx * dx + dy * dy);
    }

    lastLocation = location;

    return accumlator + dist;
  }, 0);

  totalDistance = totalDistance.toFixed(0);

  return <div>Distance: {totalDistance}</div>;
}
