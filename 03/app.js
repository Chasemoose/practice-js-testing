export default function randomNumber(min, max) {
    if(typeof min !== 'number' && isNaN(min))
        throw new Error('Min arg is not a number')
    
    if(typeof max !== 'number' && isNaN(max))
        throw new Error('Max arg is not a number')



    return Math.random() * (max - min) + min
}