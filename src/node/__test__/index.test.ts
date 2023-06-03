import { expect, test } from 'vitest';

test('add', () => {
  expect(1 + 2).toBe(3);
  expect('map'.slice(1)).toMatchSnapshot('"ap"');
  expect('map'.slice(1)).toMatchInlineSnapshot('"ap"');
});
