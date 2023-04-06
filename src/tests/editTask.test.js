jest.mock('../tasks');

const { editTask } = require('../tasks');

describe('Edit Tasks', () => {
  test('Should edit a task in list', () => {
    expect(editTask({
      description: 'study',
      completed: false,
    }, 'play')).toStrictEqual([
      {
        description: 'play',
        completed: false,
      },
    ]);
  });
});
