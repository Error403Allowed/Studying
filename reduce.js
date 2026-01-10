const shout = (message) => message.toUpperCase() + "!";

const words = ["hello", "js", "pain",]

const lengthsTotal = words.reduce((acc, word) => {
    return acc + word.length;
}, 0);

console.log(lengthsTotal);
