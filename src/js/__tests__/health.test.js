import get_health from '../health.js';

test('should health', () => {
  const result = get_health({name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should health', () => {
  const result = get_health({ name: 'Маг', health: 43 });

  expect(result).toBe('wounded');
});

test('should health', () => {
  const result = get_health({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
})

test('should health', () => {
  const result = get_health({ name: 'Маг', health: 6 });

  expect(result).toBe('critical');
})
