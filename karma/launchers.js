export default {
  ChromeTravisCI: {
    base: 'Chrome',
    flags: ['--no-sandbox']
  },
  ChromeWithoutSecurity: {
    base: 'Chrome',
    flags: ['--disable-web-security']
  }
}
