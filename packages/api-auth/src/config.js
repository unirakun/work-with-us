export default () => {
  const {
    GOOGLE_AUTH_CLIENT_ID,
    GOOGLE_AUTH_CLIENT_SECRET,
    OAUTH_CALLBACK_PROTOCOL = 'http',
    OAUTH_CALLBACK_HOST = 'localhost:4000',
  } = process.env

  if (!GOOGLE_AUTH_CLIENT_ID) throw new Error('GOOGLE_AUTH_CLIENT_ID must be set')
  if (!GOOGLE_AUTH_CLIENT_SECRET) throw new Error('GOOGLE_AUTH_CLIENT_SECRET must be set')

  return {
    defaults: {
      protocol: OAUTH_CALLBACK_PROTOCOL,
      host: OAUTH_CALLBACK_HOST,
      callback: '/callback',
      transport: 'querystring',
      state: true,
    },
    google: {
      key: GOOGLE_AUTH_CLIENT_ID,
      secret: GOOGLE_AUTH_CLIENT_SECRET,
      scope: [
        'https://www.googleapis.com/auth/plus.me',
      ],
      callback: '/google_callback',
    },
  }
}
