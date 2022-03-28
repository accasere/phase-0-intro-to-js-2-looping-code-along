// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`)
}*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let index = 0; index < gifts.length; index++) {
    console.log(`Wrapped ${gifts[index]} and added a bow!`);
  }

  return gifts;
}

//wrapGifts(gifts);

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
 }


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number-=1
    }
}