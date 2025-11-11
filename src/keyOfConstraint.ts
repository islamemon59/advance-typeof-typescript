// keyof : type of operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "cng";

type User = {
  name: string;
  age: number;
  address: {
    city: string;
  };
};

const user: User = {
  name: "emon",
  age: 23,
  address: {
    city: "Dhaka",
  },
};

const myName = user["name"];
const myAge = user["age"];
const myAddress = user["address"];
console.log({ myName, myAge, myAddress });

const getUserDataByKey = <X> (obj: X, key: keyof X) => {
  return obj[key];
};

const user1 = {
    bike: "Suzuki"
}

const result1 = getUserDataByKey(user1, "bike");

console.log(result1);
