import { useForm, ValidationError } from '@formspree/react'
import styles from './index.module.css'

export function ContactForm() {
  const [state, handleSubmit] = useForm('xnqwwwrq')

  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll be in touch soon.</p>
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      style={{ opacity: state.submitting ? 0.6 : null }}
    >
      <fieldset>
        <label htmlFor="name">
          Name <span className={styles.star}>*</span>
        </label>
        <input id="name" type="text" name="name" maxLength="100" required />
        <ValidationError
          className={styles.error}
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">
          Email <span className={styles.star}>*</span>
        </label>
        <input id="email" type="email" name="email" maxLength="100" required />
        <ValidationError
          className={styles.error}
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="message">
          Message <span className={styles.star}>*</span>
        </label>
        <textarea id="message" name="message" maxLength="1000" required />
        <ValidationError
          className={styles.error}
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </fieldset>
      <fieldset>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  )
}
