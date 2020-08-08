import identity from 'netlify-identity-widget'

export default (_, inject) => {
  identity.init({
    // APIUrl: '',
    locale: 'fr',
  })
  inject('identity', identity)
}
