/**
 * A function that decides when a user has permission to 
 * do an action
 * @param {Array} user permission object
 * @param {Array} user object
 * @param {string} collection name
 * @param {string} may be one of ['create', 'update', 'read', 'delete']
 * @returns {Boolean}
 */
function mayUser(userPermissions, user, collection, actionType) {
  // your logic goes here
  console.log(arguments);
  return true;
}

module.exports = mayUser;
