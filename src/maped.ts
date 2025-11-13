//mapped types

const arrNumber: number[] = [1, 2, 3];

const arrString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrNumber.map((number) =>
  number.toString()
);
console.log(arrayOfStringUsingMap);

//mapped with types

type AreaWithNumber = {
  height: number;
  width: number;
};

// type areaWithString = {
//     height: string,
//     width: string,
// }

//? mapped type make string

type AreaWithString = {
  [key in "height" | "width"]: string;
};

// using mapped type areaWithNumber into areaWithBoolean

type AreaWithBoolean = {
  [key in keyof AreaWithNumber]: boolean;
};

// dynamic mapped types

type Area<T> = {
  [key in keyof T]: T[key];
};

type AreaType = { height: number; width: string };

const area: Area<AreaType> = {
  height: 20,
  width: "20",
};
