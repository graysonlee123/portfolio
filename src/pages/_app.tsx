import { GoogleAnalytics } from 'nextjs-google-analytics'
import '/src/styles/global.scss'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
