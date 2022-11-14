import GameBoard from "../../../../components/GameBoard";
import { FC, ChangeEventHandler } from "react";
import "./style.css";

export type StartBoardProps = {
  name: string;
  onChange: (value: string) => void;
  onShipSelect: (ship: string) => void;
  selectedShips: string[];
};

const StartBoard: FC<StartBoardProps> = ({
  name,
  onChange,
  onShipSelect,
  selectedShips,
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };

  const handleShipSelect = (row: string, cell: number) => {
    const id = `${row}${cell}`;
    onShipSelect(id);
  };

  return (
    <div className="start_board_wrapper">
      <div className="name_change_wrapper">
        <p>Change yuour name</p>
        <input value={name} onChange={handleInputChange} />
      </div>
      <div className="board_config_wrapper">
        <p>Put your ships</p>
        <GameBoard handleClick={handleShipSelect} ships={selectedShips} />
      </div>

      <button className="start_button">Ready</button>
    </div>
  );
};

export default StartBoard;
