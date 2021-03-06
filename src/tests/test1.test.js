const { user, userPerms } = require('../user1');
const mayUser = require('../index');

test('User1 | posts', () => {
  expect(mayUser(user, userPerms, "posts", "create")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "read")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "update")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "delete")).toBe(true);
})

test('User1 | blocks', () => {
  expect(mayUser(user, userPerms, "blocks", "create")).toBe(true);
  expect(mayUser(user, userPerms, "blocks", "read")).toBe(true);
  expect(mayUser(user, userPerms, "blocks", "update")).toBe(false);
  expect(mayUser(user, userPerms, "blocks", "delete")).toBe(false);
})

test('User1 | users', () => {
  expect(mayUser(user, userPerms, "users", "create")).toBe(false);
  expect(mayUser(user, userPerms, "users", "read")).toBe(true);
  expect(mayUser(user, userPerms, "users", "update")).toBe(false);
  expect(mayUser(user, userPerms, "users", "delete")).toBe(false);
})
