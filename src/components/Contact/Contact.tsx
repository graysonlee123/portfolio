import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'
import Container from '../Container'

export default function Contact() {
  return (
    <section className={classNames(styles.section)}>
      <Container>
        <div className={styles.grid}>
          <div className={classNames(styles.img, utilStyles.imgRound, utilStyles.imgShadow)}>
            <Image
              src="/images/outside.jpg"
              alt="Me on a patio working on my laptop"
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 91.125rem) 46.5rem, (min-width: 48rem) calc(85vw - (85vw / 10) * (2 / 3)), 85vw"
            />
          </div>
          <div className={styles.form}>
            <Header header="Contact" element="h2">
              <p>
                Get in touch with me if you&apos;re looking for a developer, have a question, or
                just want to connect.
              </p>
            </Header>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
