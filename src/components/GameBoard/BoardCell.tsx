import { FC } from "react";

export type BoardCellProps = {
  row: string;
  rowIndex: number;
  cell: number;
  cellIndex: number;
  handleSelect: (row: string, cell: number) => () => void;
  showShip: boolean;
};

const BoardCell: FC<BoardCellProps> = ({
  row,
  cell,
  cellIndex,
  rowIndex,
  handleSelect,
  showShip,
}) => {
  return (
    <td
      className={`${
        cell === 0 ? "row_name" : rowIndex === 0 ? "cell_name" : "board_cell"
      }`}
      key={cellIndex}
      onClick={handleSelect(row, cell)}
    >
      {cell === 0 ? row : rowIndex === 0 ? cell : showShip ? "N" : ""}
    </td>
  );
};

export default BoardCell;
