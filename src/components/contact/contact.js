import Image from 'next/image'
import Header from '@/components/header'
import ContactForm from '@/components/contact-form'
import classNames from 'classnames'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

export function Contact() {
  return (
    <section
      className={classNames(
        utilStyles.containerLg,
        utilStyles.my3Xl,
        styles.section
      )}
    >
      <div className={styles.grid}>
        <div
          className={classNames(
            styles.img,
            utilStyles.imgRound,
            utilStyles.imgShadow
          )}
        >
          <Image
            src="/images/outside.jpg"
            alt="Me on a patio working on my laptop"
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 91.125rem) 46.5rem, (min-width: 48rem) calc(85vw - (85vw / 10) * (2 / 3)), 85vw"
          />
        </div>
        <div className={styles.form}>
          <Header header="Contact" level="h2">
            <p>
              Get in touch with me if you&apos;re looking for a developer, have
              a question, or just want to connect.
            </p>
          </Header>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
