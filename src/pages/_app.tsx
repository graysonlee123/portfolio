import { GoogleAnalytics } from '@next/third-parties/google'
import { AppProps } from 'next/app'
import '/src/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
