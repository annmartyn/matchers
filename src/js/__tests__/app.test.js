import get_match from '../app.js';

test('should not match', () => {
    const result = get_match([{ name: 'Мечник', health: 10 },
        { name: 'Лучник', health: 45 },
        { name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 }]);

    expect(result).not.toBe([{ name: 'Мечник', health: 10 },
        { name: 'Лучник', health: 45 },
        { name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 }]);
})

test('should match new obj', () => {
    const result = get_match([{ name: 'Мечник', health: 10 },
        { name: 'Лучник', health: 45 },
        { name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 }]);

    expect(result).toEqual([{ name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 },
        { name: 'Лучник', health: 45 },
        { name: 'Мечник', health: 10 }]);
})

test('should match new obj', () => {
    const result = get_match([{ name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 },
        { name: 'Мечник', health: 10 }]);

    expect(result).toEqual([{ name: 'Маг', health: 90 },
        { name: 'Бард', health: 70 },
        { name: 'Мечник', health: 10 }]);
})

test('should match new obj', () => {
    const result = get_match([{ name: 'Мечник', health: 10 },
        { name: 'Лучник', health: 45 },
        { name: 'Маг', health: 90 }]);

    expect(result).toEqual([{ name: 'Маг', health: 90 },
        { name: 'Лучник', health: 45 },
        { name: 'Мечник', health: 10 }]);
})
