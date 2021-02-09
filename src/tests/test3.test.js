const { user, userPerms } = require('../user3');
const mayUser = require('../index');

test('User2 | posts', () => {
  expect(mayUser(user, userPerms, "posts", "create")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "read")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "update")).toBe(true);
  expect(mayUser(user, userPerms, "posts", "delete")).toBe(true);
})

test('User2 | blocks', () => {
  expect(mayUser(user, userPerms, "blocks", "create")).toBe(true);
  expect(mayUser(user, userPerms, "blocks", "read")).toBe(true);
  expect(mayUser(user, userPerms, "blocks", "update")).toBe(true);
  expect(mayUser(user, userPerms, "blocks", "delete")).toBe(true);
})

test('User2 | users', () => {
  expect(mayUser(user, userPerms, "users", "create")).toBe(true);
  expect(mayUser(user, userPerms, "users", "read")).toBe(true);
  expect(mayUser(user, userPerms, "users", "update")).toBe(true);
  expect(mayUser(user, userPerms, "users", "delete")).toBe(true);
})
