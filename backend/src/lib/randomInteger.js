export default function (number) {
    const randomNumber = Math.trunc((Math.random() * 100) * (number - 1) / 100)
    return randomNumber
}