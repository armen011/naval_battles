const rows = ["", "A", "B", "C", "D", "E"];

const generateRow = (count: number = 5) => {
  const acc: number[] = [];

  for (let i = 0; i <= count; i++) {
    acc.push(i);
  }
  return acc;
};

export const useBoardState = () => {
  const res = rows.map((element, _, arr) => ({
    row: element,
    cells: generateRow(arr.length),
  }));

  return res;
};
