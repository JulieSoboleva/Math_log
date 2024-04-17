import Swordsman from '../swordsman';

test('check creating object', () => {
    const swordsman = new Swordsman('Коля');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Коля',
        type: 'Swordsman'
    }

    expect(swordsman).toEqual(correct);
});