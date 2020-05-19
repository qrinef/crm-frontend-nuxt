import jwtDecode from 'jwt-decode'
import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $auth: any
  }
}

const accessor: Plugin = ({ $auth }) => {
  if (!$auth.loggedIn) {
    return
  }

  const token = $auth.token.get().replace(/^Bearer\s/, '')
  const user = jwtDecode(token) as any

  $auth.$storage.setState('user', { email: user.email })
}

export default accessor
