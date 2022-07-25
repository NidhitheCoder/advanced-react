// type numArray = Array<string>

// export const addUID = (obj: object) => {
// let uid = Math.floor(Math.random() * 100)
// }

// // The function is not good is using different data types or it is not allows to run different data types(Without any).
// export const last = (arr: Array<number>) => {
//   return arr[arr.length - 1];
// };


export const last = <T>(arr: T[]) => {
  return arr[arr.length-1];
};

// export const last = <T>(arr: T[]): T => { // when we are using :T that helps to make sure the return type is T only.
// }

export const makeArr = (x: number) => {
  return [x];
};

// Multiple props 
// export const sample = <T, Y = number>(x: T, y: Y) => { // Here we can say specifically the number types only
export const sample = <T, Y>(x: T, y: Y) => {
  return [x, y]
};


// Here in this function we can only pass firstname as string and lastName as string only.
export const makeFullName = (obj: {firstName: string, lastName: string}) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  }
};

// Now in the same function we can pass diff types of props.
export const makeFullName2 = <T extends {firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  }
}


// create generics with interfaces(T is used to accpect diffrent types of data as data)
interface Tab<T> {
  id: string;
  position: number;
  data: T;
};

// // Specified version
// type NumberTab =  {
//   id: string;
//   position: number;
//   data: number;
// }

// // simple version
type NumberTab = Tab<number>;

type StringTab = Tab<string>;
