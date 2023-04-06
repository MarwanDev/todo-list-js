jest.mock('../tasks');

const { removeTask } = require('../tasks');

describe('Remove Tasks', () => {
  test('Should remove a task to list', () => {
    expect(removeTask(
      {
        description: 'study',
        completed: false,
      },
    )).toStrictEqual([]);
  });
});
