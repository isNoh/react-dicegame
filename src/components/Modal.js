import React from "react";
import { Zustore } from "../Zustore";

export function Modal({ turn, count }) {
  const { PI_1, PI_2 } = Zustore();
  return (
    <div className="modal">
      <div>
        {turn ? (
          <h1>
            {PI_1} : {count}
          </h1>
        ) : (
          <h1>
            {PI_2} : {count}
          </h1>
        )}
      </div>
    </div>
  );
}
