import create from "zustand";
import { faDiamond, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Zustore = create((set) => ({
  PI_1: (
    <FontAwesomeIcon icon={faDiamond} size="2x" style={{ color: "blue" }} />
  ),
  PI_2: (
    <FontAwesomeIcon icon={faHeart} size="2x" style={{ color: "tomato" }} />
  ),

  winner: "",
  P1Win() {
    set(() => ({ winner: "player1" }));
  },
  P2Win() {
    set(() => ({ winner: "player2" }));
  },
  Reset() {
    set(() => ({ winner: "" }));
  },
}));
