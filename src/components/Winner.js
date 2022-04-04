import React from "react";
import { Zustore } from "../Zustore";

export function Winner({
  setPlayer1,
  setPlayer2,
  setTurn,
  setMoney1,
  setMoney2,
}) {
  const { PI_1, PI_2, winner, Reset } = Zustore();

  function GameReset() {
    setPlayer1(0);
    setPlayer2(0);
    setMoney1(3000);
    setMoney2(3000);
    setTurn(false);
    Reset();
  }
  return (
    <div className="winner">
      <h1>
        {winner === "player1" ? (
          <div>{PI_1} 가 승리하였습니다!</div>
        ) : (
          <div>{PI_2} 가 승리하였습니다!</div>
        )}
      </h1>
      <button className="my-btn" onClick={() => GameReset()}>
        다시하기
      </button>
    </div>
  );
}
