import Head from 'next/head'
import Layout from '@/components/Layout'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Grayson Gantek | Contact</title>
      </Head>
      <Contact />
    </Layout>
  )
}
