// Code your solutions in this file
function writeCards(names, gift){
    const messages = []
    names.forEach(element => {
        messages.push(`Thank you, ${element}, for the wonderful ${gift} gift!`);
    });
    return messages;
}

//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(n){
    while (0 <= n){
        console.log(n);
        n--;
    }
}