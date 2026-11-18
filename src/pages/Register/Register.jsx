import { Link } from 'react-router-dom'

import illustration from '../../assets/svg/02-register/register-illustration.svg'
import googleIcon from '../../assets/svg/00-shared/google-g.svg'
import eyeIcon from '../../assets/svg/07-icons/navy/eye.svg'
import styles from './Register.module.css'

function Register() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.step}>
          <span className={styles.stepNumber}>01</span>
          <span className={styles.stepLine} />
        </div>

        <h1 className={styles.title}>Start building a clearer future.</h1>

        <p className={styles.description}>
          Create an account to analyze your resume, save your results and return whenever you need
          to.
        </p>

        <div className={styles.visual}>
          <img src={illustration} alt="" className={styles.illustration} />
          <p className={styles.note}>Your career journey in focus.</p>
        </div>
      </section>

      <section className={styles.cardWrapper}>
        <form className={styles.card}>
          <h2 className={styles.cardTitle}>Create your account</h2>
          <p className={styles.cardSubtitle}>Start building a clearer picture of your career.</p>

          <label className={styles.field}>
            <span className={styles.label}>Email address</span>
            <input type="email" placeholder="you@example.com" className={styles.input} />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Password</span>
            <span className={styles.inputWrapper}>
              <input type="password" placeholder="Create a password" className={styles.input} />
              <button type="button" className={styles.eyeButton} aria-label="Show password">
                <img src={eyeIcon} alt="" />
              </button>
            </span>
          </label>

          <button type="submit" className={styles.primaryButton}>
            Create account
          </button>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <button type="button" className={styles.googleButton}>
            <img src={googleIcon} alt="" />
            Continue with Google
          </button>

          <p className={styles.switch}>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </section>
    </div>
  )
}

export default Register
