let msg: "Hello" = "Hello";

msg = 'Hello'
const serverConfig: {protocol: "http" | 'https'; port: 3000 | 3001 } = {
    protocol: "https",
    port: 3001 
} 
// function starServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
//     if (port === 3000 || port === 3001) {
//         console.log(`Server started on ${protocol}://server:${port}`)        
//     } else {
//         console.error("Invalid port");
//     }
//     return 'Server started'
// }   
const starServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
    protocol: 'http' | 'https',
     port: 3000 | 3001
): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`)        
    return "Server started";
}   
starServer('http', 3000);

type AnimationTimigFunc = 'ease' | 'ease-out' | 'ease-in'; 
function createAnimation(
     id: string | number,
     animName: string,
     timingFunc: AnimationTimigFunc = 'ease',
     duration: number,
     iterCount: "infinite" | number
    ): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
        console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`)
        // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;  
    // }
}
createAnimation('id', 'fade', 'ease', 5, 'infinite')