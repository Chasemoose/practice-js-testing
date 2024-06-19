export default function randomNumber(min, max) {
    if(typeof min !== 'number')
        throw new Error('Min arg is not a number')



    return Math.random() * (max - min) + min
}