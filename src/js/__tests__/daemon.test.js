import Daemon from '../daemon';

test('check creating object', () => {
    const daemon = new Daemon({ name: 'Дима', distance: 1 });
    const correct = {
        mattack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Дима',
        type: 'Daemon',
        stoned: false,
        distance: 1
    }

    expect(daemon).toEqual(correct);
});