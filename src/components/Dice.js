import React, { useEffect, useState } from "react";
import { Roll } from "./Roll";
import { LandValue } from "./LandValue";
import { Zustore } from "../Zustore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Winner } from "./Winner";
export function Dice() {
  //기본값 세팅
  const [player1, setPlayer1] = useState(0);
  const [money1, setMoney1] = useState(3000);
  const [player2, setPlayer2] = useState(0);
  const [money2, setMoney2] = useState(3000);
  const [turn, setTurn] = useState(false);

  //Zustore 불러오기
  const { PI_1, PI_2, P1Win, P2Win, winner } = Zustore();

  //돈 차감 시스템
  useEffect(() => {
    LandValue.map((a, i) => {
      switch (player1) {
        case i:
          setMoney1(money1 - a.value);
      }
    });
    if (money2 <= 0) {
      P1Win();
    }
  }, [player1]);
  useEffect(() => {
    LandValue.map((a, i) => {
      switch (player2) {
        case i:
          setMoney2(money2 - a.value);
      }
    });
    if (money1 <= 0) {
      P2Win();
    }
  }, [player2]);

  return (
    <div className="dice">
      <Roll
        player1={player1}
        player2={player2}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        turn={turn}
        setTurn={setTurn}
        money1={money1}
        setMoney1={setMoney1}
        money2={money2}
        setMoney2={setMoney2}
      />
      {winner ? (
        <Winner
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setTurn={setTurn}
          setMoney1={setMoney1}
          setMoney2={setMoney2}
        />
      ) : null}
      <div className="dice__hp">
        <div>
          <div>{PI_2}</div>
          <input type="range" value={money2} max="3000" min="0" />
        </div>
        <h1>
          <FontAwesomeIcon icon={faSackDollar} />
        </h1>
        <div>
          <div>{PI_1}</div>
          <input type="range" value={money1} max="3000" min="0" />
        </div>
      </div>
      <div className="dice__board">
        {LandValue.map((a, i) => {
          return (
            <div key={i}>
              <div className={`dice__row__box ${a.id}`}>
                {player1 === i ? PI_1 : null}
                {player2 === i ? PI_2 : null}

                {a.purchase ? (
                  <div className="dice__row__box__value">${a.value}</div>
                ) : (
                  <div className="dice__row__box__novalue" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
