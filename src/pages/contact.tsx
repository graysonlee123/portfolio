import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Grayson Gantek | Contact</title>
      </Head>
      <Hero
        header="Get in touch with me"
        navigation={<Hero.Navigation />}
        socials={<Hero.Socials />}
      />
      <Contact />
    </Layout>
  )
}
