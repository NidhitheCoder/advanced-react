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
}

// export const last = <T>(arr: T[]): T => { // when we are using :T that helps to make sure the return type is T only.
// }

export const makeArr = (x: number) => {
  return [x];
};

// Multiple props 
// export const sample = <T, Y = number>(x: T, y: Y) => { // Here we can say specifically the number types only
export const sample = <T, Y>(x: T, y: Y) => {
  return [x, y]
}