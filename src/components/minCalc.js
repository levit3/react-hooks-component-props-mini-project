import React from "react";

function MinCalc({ minutes }) {
  const coffee = "☕".repeat(Math.ceil(minutes / 5));
  const tea = "🍱".repeat(Math.ceil(minutes / 10));
  return minutes < 30 ? (
    <small>
      {"☕".repeat(Math.ceil(minutes / 5))} {minutes} minutes read
    </small>
  ) : (
    <small>
      {tea} {minutes} minutes read
    </small>
  );
}

export default MinCalc;
