jest.mock('../tasks');

const { changeCompleteState } = require('../tasks');

describe('change completed state', () => {
  test('change completed state of tasks in the list', () => {
    expect(changeCompleteState(
      {
        description: 'test desc',
        completed: false,
      },
    )).toStrictEqual([
      {
        description: 'test desc',
        completed: true,
      },
    ]);
  });
});
