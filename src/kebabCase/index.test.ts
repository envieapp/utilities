import { kebabCase } from '.';

describe('kebabCase testing', () => {
  test('empty', () => {
    const result = kebabCase('');
    expect(result).toBe('');
  });

  test('raw', () => {
    const result = kebabCase('something what will be in kebab case');
    expect(result).toBe('something-what-will-be-in-kebab-case');
  });

  test('raw random case', () => {
    const result = kebabCase('SoMeThing WHAT WiLl bE IN keBaB caSe');
    expect(result).toBe('so-me-thing-what-wi-ll-b-e-in-ke-ba-b-ca-se');
  });

  test('raw with some space symbols', () => {
    const result = kebabCase('something    what---will___be_in-kebabCase');
    expect(result).toBe('something-what-will-be-in-kebab-case');
  });

  test('kebab-case', () => {
    const result = kebabCase('kebab-case');
    expect(result).toBe('kebab-case');
  });

  test('camelCase', () => {
    const result = kebabCase('camelCase');
    expect(result).toBe('camel-case');
  });

  test('snake_case', () => {
    const result = kebabCase('snake_case');
    expect(result).toBe('snake-case');
  });

  test('PascalCase', () => {
    const result = kebabCase('PascalCase');
    expect(result).toBe('pascal-case');
  });

  test('UPPER_SNAKE_CASE', () => {
    const result = kebabCase('UPPER_SNAKE_CASE');
    expect(result).toBe('upper-snake-case');
  });

  test('UPPER-KEBAB-CASE', () => {
    const result = kebabCase('UPPER-KEBAB-CASE');
    expect(result).toBe('upper-kebab-case');
  });
});
