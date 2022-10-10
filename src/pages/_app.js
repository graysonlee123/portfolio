import { GoogleAnalytics } from 'nextjs-google-analytics'
import '/src/styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
