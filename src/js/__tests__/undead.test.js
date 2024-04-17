import Undead from '../undead';

test('check creating object', () => {
  const undead = new Undead('Лёня');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Лёня',
    type: 'Undead'
  }

  expect(undead).toEqual(correct);
});
