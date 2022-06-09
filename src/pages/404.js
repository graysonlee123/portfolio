import Link from 'next/link'
import Layout from '@/components/layout'
import Container from '@/components/container'
import Header from '@/components/header'
import classNames from 'classnames'
import utilStyles from '../styles/utils.module.scss'

export default function Custom404() {
  return (
    <Layout>
      <Container>
        <Header
          className={classNames(utilStyles.mt2Xl, utilStyles.mbLg)}
          header="I could not find that page..."
          level="h2"
        >
          <p>
            Sorry about that. Maybe go{' '}
            <Link href="/">
              <a className={utilStyles.textLink}>back to home?</a>
            </Link>
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
