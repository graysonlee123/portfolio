import { GoogleAnalytics } from '@next/third-parties/google'
import { AppProps } from 'next/app'
import { Mulish } from 'next/font/google'
import '/src/styles/global.scss'

const mulish = Mulish({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mulish.className}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </div>
  )
}
