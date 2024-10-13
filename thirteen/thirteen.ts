const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

// function printMessages(msg: string | number | boolean): void {
//     if (typeof msg  === 'string' || typeof msg === 'number') {
//         console.log(msg.toString());
//     } else {
//         console.log(msg);
//     }
//     console.log(msg)
// }

function printMessages(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m))
    } else if(typeof msg === 'number'){
        console.log(msg.toFixed());        
    } else {
        console.log(msg)
    }
    console.log(msg)
}
printMessages(4);

const PrintRatinhs = (a: number[] | string) => {
    console.log(a.slice(0, 3))
}

function CheckReading(readings: {system: number} | {user: number}): void {
    if ('system' in readings) {
        console.log(readings.system)
    } else {
        console.log(readings.user)
    }
}

function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getDate())
    } else {
        console.log(x)
    }
}