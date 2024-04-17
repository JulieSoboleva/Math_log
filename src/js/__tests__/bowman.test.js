import Bowman from '../bowman';

test('check creating object', () => {
  const bowman = new Bowman('Вася');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Вася',
    type: 'Bowman'
  }

  expect(bowman).toEqual(correct);
});
