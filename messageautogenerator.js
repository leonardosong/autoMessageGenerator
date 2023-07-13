const messages = [
    'You are very lucky today',
    'Today is for you.',
    'Whatever you do today will be good for you',
    'Say you love your friends',
    'You will be a excellent programmer any time soon'
];
function autoMessageGenerator(){
    let randomNum = Math.floor(Math.random()* 5);
    console.log(messages[randomNum]);
}
autoMessageGenerator();

