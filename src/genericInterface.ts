interface Developer<T, X = null> {
  name: string;
  age: number;
  salary: number;
  device: {
    model: string;
    brand: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X
}

interface WithOutBrand {
  heartRate: string;
  stopWatch: boolean;
}

const poorDeveloper: Developer<WithOutBrand, {brand: string, power: string}> = {
  name: "emon",
  age: 20,
  salary: 15000,
  device: {
    model: "G6",
    brand: "HP",
    releaseYear: 2016,
  },
  smartWatch: {
    heartRate: "100",
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    power: "100cc"
  }
};

interface WithBrand {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  calculator: boolean;
}

const richDeveloper: Developer<WithBrand> = {
  name: "emon",
  age: 20,
  salary: 15000,
  device: {
    model: "G6",
    brand: "HP",
    releaseYear: 2016,
  },
  smartWatch: {
    heartRate: "100",
    stopWatch: true,
    callSupport: true,
    calculator: true,
  },
};
