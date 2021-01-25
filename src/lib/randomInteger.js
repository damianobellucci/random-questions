//generate number between zero and seed-1 (tipically the seed is the length of the array of which to calculate a random index)
export default function randomInteger(seed) {
    let randomNumber = Math.random() * 100
    return Math.trunc(randomNumber * seed / 100)
}