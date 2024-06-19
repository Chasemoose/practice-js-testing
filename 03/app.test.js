import randomNumber from './app';

it('Num 1 is returned when draw number from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
})

it('If min arg number is not a number throw error', () => {
    expect( () => randomNumber('z', 5)).toThrow('Min arg is not a number')
})