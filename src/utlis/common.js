export const getPrice = (price) => {
    let array = String(price)
      .split("")
      .map((n) => Number(n));
    let returnArray = [[...array.splice(0, 1), ","].join(""), ...array, ".00"].join(
      ""
    );
  return returnArray;
};
