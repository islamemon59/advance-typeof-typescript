//conditional : jodi kisu condition er upor depend kore tahole take bole conditional type

type A = undefined;
type B = null;

type C = A extends number ? true : B extends null ? true : false;


type RichPeoplesVehicle = {
    bike: string,
    car: string,
    ship: string
}

type CheckVehicle<T> =  T extends keyof RichPeoplesVehicle ? true: false;

type HasBike = CheckVehicle<"Bike">