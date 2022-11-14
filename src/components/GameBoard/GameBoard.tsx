import { FC } from "react";
import BoardCell from "./BoardCell";
import { useBoardState } from "./hook";
import "./style.css";
import { isShipExists } from "./utils";

export type GameBoardProps = {
  handleClick: (row: string, cell: number) => void;
  ships: string[];
};

const GameBoard: FC<GameBoardProps> = ({ handleClick, ships }) => {
  const board = useBoardState();

  const handleSelect = (row: string, cell: number) => () => {
    handleClick(row, cell);
  };

  return (
    <table className="board_wrapper">
      <tbody>
        {board.map(({ row, cells }, index) => {
          return (
            <tr key={index} className="board_row">
              {cells.map((cell, cellIndex) => (
                <BoardCell
                  key={cellIndex}
                  {...{
                    row,
                    cell,
                    rowIndex: index,
                    cellIndex,
                    handleSelect,
                    showShip: isShipExists(row, cell, ships),
                  }}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GameBoard;
