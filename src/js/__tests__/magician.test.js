import Magician from '../magician';

test('check creating object', () => {
    const magician = new Magician({ name: 'Женя', distance: 2 });
    const correct = {
        mattack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Женя',
        type: 'Magician',
        stoned: false,
        distance: 2
    }

    expect(magician).toEqual(correct);
});