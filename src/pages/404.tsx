import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Header from '@/components/Header'
import classNames from 'classnames'
import utilStyles from '../styles/utils.module.scss'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Grayson Gantek | 404</title>
      </Head>
      <Container>
        <Header
          className={classNames(utilStyles.mt2Xl, utilStyles.mbLg)}
          header="I could not find that page..."
          element="h2"
        >
          <p>
            Sorry about that. Maybe go{' '}
            <Link className={utilStyles.textLink} href="/">
              back to home?
            </Link>
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
