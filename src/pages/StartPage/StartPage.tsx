import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  changeName as changeFirstPlayerName,
  selectShip as selectFirstPlayerShips,
} from "../../features/firstPlayer/firstPlayerSlice";
import { changeName as changeSecondPlayerName } from "../../features/secondPlayer/secondPlayerSlice";
import MainLayout from "../../layoutes/MainLayout";
import StartBoard from "./Components/StartBoard";
import "./style.css";

const StartPage = () => {
  const dispatch = useDispatch();
  const { firstPlayer, secondPlayer } = useSelector(
    (state: RootState) => state
  );

  const handleFirstPlayerNameChange = (value: string) => {
    dispatch(changeFirstPlayerName(value));
  };

  const handleFirstPlayerShipSelect = (ship: string) => {
    dispatch(selectFirstPlayerShips(ship));
  };
  const handleSecondPlayerShipSelect = (ship: string) => {};

  const handleSecondPlayerNameChange = (value: string) => {
    dispatch(changeSecondPlayerName(value));
  };

  console.log("first", firstPlayer.ships);

  return (
    <MainLayout
      fistChild={
        <StartBoard
          name={firstPlayer.name}
          onChange={handleFirstPlayerNameChange}
          onShipSelect={handleFirstPlayerShipSelect}
          selectedShips={firstPlayer.ships}
        />
      }
      secondChild={
        <StartBoard
          name={secondPlayer.name}
          onChange={handleSecondPlayerNameChange}
          onShipSelect={handleSecondPlayerShipSelect}
          selectedShips={secondPlayer.ships}
        />
      }
    />
  );
};

export default StartPage;
