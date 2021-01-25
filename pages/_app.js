function MyApp({ Component, pageProps }) {
  console.log('APP Render');
  return <Component
    theme='default'
    {...pageProps}
  />
}

export default MyApp
