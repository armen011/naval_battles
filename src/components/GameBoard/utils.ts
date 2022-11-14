export const isShipExists = (
  row: string,
  cell: number,
  ships: string[]
): boolean => {
  const id = `${row}${cell}`;
  return ships.includes(id);
};
