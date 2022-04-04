import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Zustore } from "../Zustore";
import { Modal } from "./Modal";
export function Roll({
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  turn,
  setTurn,
}) {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  const { PI_1, PI_2 } = Zustore();

  function RollDice() {
    var random = Math.ceil(Math.random() * 6);
    setCount(random);
    if (turn) {
      setModal(true);
      setTimeout(() => {
        if (random + player1 > 23) {
          setPlayer1(random + player1 - 24);
        } else {
          setPlayer1(random + player1);
        }
        setTurn(!turn);
        setModal(false);
      }, 2000);
    } else {
      setModal(true);

      setTimeout(() => {
        if (random + player2 > 23) {
          setPlayer2(random + player2 - 24);
        } else {
          setPlayer2(random + player2);
        }

        setTurn(!turn);
        setModal(false);
      }, 2000);
    }
  }

  return (
    <div className="roll">
      <div>
        {modal ? (
          <Modal turn={turn} count={count} />
        ) : (
          <>
            <h1>주사위를 굴려주세요!</h1>
            <h1>{turn ? PI_1 : PI_2}</h1>
            <button className="my-btn" onClick={RollDice}>
              <FontAwesomeIcon icon={faDice} size="3x" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
