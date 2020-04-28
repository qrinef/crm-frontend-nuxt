import jwtDecode from 'jwt-decode'

export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  const token = $auth.token.get().replace(/^Bearer\s/, '')
  const user = jwtDecode(token)

  $auth.$storage.setState('user', { email: user.email })
}
