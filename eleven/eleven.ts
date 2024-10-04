// const isBirthDays: boolean = true;
// const userNameData: string = 'Alex';
// const ageData: number = 40;

const userData = {
    isBirthDays: true,
    userNameData: 'Alex',
    ageData: 40,
    messages: {
        error: 'Error'
    }
}
const createError = (msg: string) => {
    throw new Error(msg);
}
function logBtMsg({
        isBirthDays,
        userNameData,
        ageData,
        messages: {error}
}: {
    isBirthDays: boolean;
    userNameData: string;
    ageData: number;
    messages: {error: string}
}): string {
    if (isBirthDays) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error)
    }
}
console.log(logBtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const nums: number[][] = [[4,5,3], [4,5,6]];