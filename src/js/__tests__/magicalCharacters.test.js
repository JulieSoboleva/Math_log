import Magician from "../magician";
import Daemon from "../daemon";

test('Проверка силы атаки без "дурмана"', () => {
    const magician = new Magician({name: "Ваня", attack: 100, stoned: false, distance: 2});
    expect(magician.attack).toBe(90);
});

test('Проверка силы атаки с учётом "дурмана"', () => {
    const magician = new Magician({name: "Коля", attack: 100, stoned: true, distance: 2});
    expect(magician.attack).toBe(85);
});

test('Проверка отрицательного значения силы атаки', () => {
    const magician = new Magician({name: "Антон", attack: 100, stoned: false, distance: 12});
    expect(magician.attack).toBe(0);
});

test('Проверка сила урона на расстоянии 5 клеток', () => {
    const magician = new Daemon({name: "Вася", attack: 100, stoned: false, distance: 5});
    expect(magician.attack).toBe(60);
});