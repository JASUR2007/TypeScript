const isBirth: boolean = true;
const naming: string = 'Alex';
const aging: number = 40;

function logBrtMsg (isBirth: boolean, naming: string, aging: number): void {
    if (isBirth) {
        console.log(`Congrats ${isBirth}, age: ${aging}`)
    }
}
logBrtMsg(isBirth, naming, aging);