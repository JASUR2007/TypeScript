const isBirthDays: boolean = true;
const userNameData: string = 'Alex';
const ageData: number = 40;

function logBtMsg (isBirth: boolean, naming: string, aging: number): string {
    if (isBirth) {
        return `Congrats ${isBirth}, age: ${aging}`;
    } else {
        return "Error";
    }
}
logBtMsg(isBirthDays, userNameData, 40);