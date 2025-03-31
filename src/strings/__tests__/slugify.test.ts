import { describe, it, expect } from 'vitest';
import { slugify } from '../slugify';

describe('slugify', () => {
  it('should convert a simple string to a slug', () => {
    const result = slugify('Hello World');
    expect(result).toBe('hello-world');
  });

  it('should remove special characters and accents', () => {
    const result = slugify('El Niño está aquí');
    expect(result).toBe('el-nino-esta-aqui');
  });

  it('should handle multiple spaces between words', () => {
    const result = slugify('Hello    World  Test');
    expect(result).toBe('hello-world-test');
  });

  it('should return the input if it is not a string', () => {
    const result1 = slugify(123 as any);
    expect(result1).toBe(123);

    const result2 = slugify(null as any);
    expect(result2).toBe(null);

    const result3 = slugify(undefined as any);
    expect(result3).toBe(undefined);
  });

  it('should handle an empty string', () => {
    const result = slugify('');
    expect(result).toBe('');
  });

  it('should handle strings with multiple hyphens', () => {
    const result = slugify('----Hello---World----');
    expect(result).toBe('hello-world');
  });
});
