const userPerms = {
  data: [
    {
      id: 1,
      collection: 'posts',
      role: 3,
      status: null,
      create: 'full',
      read: 'full',
      update: 'full',
      delete: 'none',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    },
    {
      id: 2,
      collection: 'blocks',
      role: 3,
      status: null,
      create: 'full',
      read: 'full',
      update: 'role',
      delete: 'role',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    },
    {
      id: 3,
      collection: 'users',
      role: 1,
      status: null,
      create: 'none',
      read: 'full',
      update: 'role',
      delete: 'none',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    }
  ]
};

const user = {
  id: 1,
  status: 'active',
  role: 3,
  first_name: 'test2',
  last_name: 'User',
  email: 'test2@example.com',
  token: 'test2',
  last_access_on: '2020-01-13T19:55:18+00:00',
  last_page: '/my-project/settings/collections/a',
  external_id: null,
  theme: 'auto',
  '2fa_secret': null,
  password_reset_token: null,
  timezone: 'America/New_York',
  locale: 'en-US',
  locale_options: null,
  avatar: null,
  company: null,
  title: null,
  email_notifications: true
};

module.exports = { userPerms, user };
