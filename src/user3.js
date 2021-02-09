const userPerms = {
  data: [
    {
      id: null,
      collection: null,
      role: null,
      status: null,
      create: null,
      read: null,
      update: null,
      delete: null,
      comment: null,
      explain: null,
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    },
  ]
};

const user = {
  id: 1,
  status: 'active',
  role: 1,
  first_name: 'admin',
  last_name: 'user',
  email: 'admin@example.com',
  token: 'admin',
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
