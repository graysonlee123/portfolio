import Head from 'next/head'
import Layout from '@/components/layout'
import Contact from '@/components/contact'

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
