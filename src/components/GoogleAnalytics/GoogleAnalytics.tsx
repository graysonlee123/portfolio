import { GoogleAnalytics as GA } from '@next/third-parties/google'

const googleAnalyticsID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * A component that outputs Google Analytics scripts.
 *
 * @returns The GoogleAnalytics scripts, or `null` if no ID is configured.
 */
export default function GoogleAnalytics() {
  if (typeof googleAnalyticsID !== 'string') {
    console.warn('Invalid or missing Google Analytics ID in the current environment.')
    return null
  }

  return <GA gaId={googleAnalyticsID} />
}
