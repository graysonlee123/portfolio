import { GoogleAnalytics as GA } from '@next/third-parties/google'

const googleAnalyticsID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  if (typeof googleAnalyticsID !== 'string') {
    console.warn('Invalid or missing Google Analytics ID in the current environment.')
    return
  }

  return <GA gaId={googleAnalyticsID} />
}
