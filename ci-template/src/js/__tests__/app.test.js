import { xpMeasure } from '../app.js';

test.each
  ([[{name: 'a', health: 1}, 'critical'], [{name: 'a', health: 90}, 'healthy'], [{name: 'a', health: 35}, 'wounded']])
  ('hero xp test', (xpAmount, result) => {
    let testResult = xpMeasure(xpAmount);
    expect(testResult).toBe(result);
  });


import { sortHealth } from '../app.js';

test('sort heroes by health', () => {
  let x = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  let rightAnswer = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  let testResult = sortHealth(x);
  expect(testResult).toEqual(rightAnswer);
});
