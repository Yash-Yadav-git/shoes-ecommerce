export const getPrice = (Price) => {
    let array = String(Price)
      .split("")
      .map((n) => Number(n));
    let returnArray = [[...array.splice(0, 1), ","].join(""), ...array, ".00"].join(
      ""
    );
  return returnArray;
};
