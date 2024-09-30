// const isBirthday: boolean = true;
// let age: number = 40;
// const username: string = "John Dow";
const userData = '{"isBirthData": true, "ageData": 40, "userNameData": "John"}'
const userObj: {
    isBirthData: boolean;
    ageData: number;
    userNameData: string;
} = JSON.parse(userData);
// console.log(userObj.ageData()) // mistake
// function logBrtMsg(isBirthDay: boolean, userNameData: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${userNameData.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "Error";
//     }
// }
// logBrtMsg(isBirthData, userNameData, 40);