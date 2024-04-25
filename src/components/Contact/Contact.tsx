import ContactForm from '@/components/ContactForm'
import classNames from 'classnames'
import Container from '../Container'
import FloatingImage from '../FloatingImage/FloatingImage'
import Text from '../Text'
import styles from './Contact.module.css'

import outsidePic from 'public/images/outside.jpg'

export default function Contact() {
  return (
    <section className={classNames(styles.section)}>
      <Container>
        <div className={styles.grid}>
          <FloatingImage
            className={styles.image}
            imageProps={{
              src: outsidePic,
              alt: 'Me on a patio working on my laptop',
              sizes:
                '(min-width: 91.125rem) 46.5rem, (min-width: 48rem) calc(85vw - (85vw / 10) * (2 / 3)), 85vw',
              fill: true,
              placeholder: 'blur',
            }}
          />
          <div className={styles.form}>
            <Text>
              <h2>Contact</h2>
              <p>
                Get in touch with me if you&apos;re looking for a developer, have a question, or
                just want to connect.
              </p>
            </Text>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
