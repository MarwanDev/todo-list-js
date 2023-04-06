jest.mock('../tasks');

const { clearComplete } = require('../tasks');

describe('Clear completed tasks', () => {
  test('Clear all completed tasks in the list', () => {
    expect(clearComplete(
      [
        {
          description: 'study',
          completed: false,
        },
        {
          description: 'eat',
          completed: true,
        },
      ],
    )).toStrictEqual([
      {
        description: 'study',
        completed: false,
      },
    ]);
  });
});