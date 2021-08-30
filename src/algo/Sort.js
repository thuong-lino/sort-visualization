export const BubbleSort = (data) => {
  //function doswap() {}
  const sorted = {
    pos1: [],
    pos2: [],
    sortedData: [],
  };
  let dt = data;
  let swapped;
  for (let i = 0; i < dt.length; i++) {
    swapped = false;
    for (let j = 0; j < dt.length - 1; j++) {
      if (dt[j] > dt[j + 1]) {
        [dt[j], dt[j + 1]] = [dt[j + 1], dt[j]];
        sorted.pos1.push(j);
        sorted.pos2.push(j + 1);

        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  //sorted.sortedData = dt.slice();
  return sorted;
};
export function QuickSort() {}
