import Zombie from '../zombie';

test('check creating object', () => {
    const zombie = new Zombie('Игорёк');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Игорёк',
        type: 'Zombie'
    }

    expect(zombie).toEqual(correct);
});