jest.mock('../tasks');

const { addTask } = require('../tasks');

describe('Add Tasks', () => {
  test('Should add a task to list', () => {
    expect(addTask(
      {
        description: 'study',
        completed: false,
      },
    )).toStrictEqual([
      {
        description: 'study',
        completed: false,
      },
    ]);
  });
});