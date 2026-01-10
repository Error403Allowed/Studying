const shout = (message) => message.toUpperCase() + "!";

const words = ["hello", "js", "pain", "ok"]

const result = words
  .filter(word => word.length > 2)
  .map(word => shout(word))

console.log(result)