import { Link } from 'react-router-dom'

import illustration from '../../assets/svg/03-login/login-illustration.svg'
import cornerDecoration from '../../assets/svg/03-login/login-corner-decoration.svg'
import googleIcon from '../../assets/svg/00-shared/google-g.svg'
import eyeIcon from '../../assets/svg/07-icons/navy/eye.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.page}>
      <img src={cornerDecoration} alt="" className={styles.corner} />

      <section className={styles.intro}>
        <div className={styles.step}>
          <span className={styles.stepNumber}>01</span>
          <span className={styles.stepLine} />
        </div>

        <h1 className={styles.title}>Continue your journey.</h1>

        <p className={styles.description}>
          Log in to access your saved analyses and keep making progress.
        </p>

        <div className={styles.visual}>
          <img src={illustration} alt="" className={styles.illustration} />
          <p className={styles.note}>Same goals. A clearer path forward.</p>
        </div>
      </section>

      <section className={styles.cardWrapper}>
        <form className={styles.card}>
          <h2 className={styles.cardTitle}>Log in to your account</h2>
          <p className={styles.cardSubtitle}>Continue where you left off.</p>

          <label className={styles.field}>
            <span className={styles.label}>Email address</span>
            <input type="email" placeholder="you@example.com" className={styles.input} />
          </label>

          <label className={`${styles.field} ${styles.passwordField}`}>
            <span className={styles.label}>Password</span>
            <span className={styles.inputWrapper}>
              <input type="password" placeholder="Enter your password" className={styles.input} />
              <button type="button" className={styles.eyeButton} aria-label="Show password">
                <img src={eyeIcon} alt="" />
              </button>
            </span>
          </label>

          <a href="#" className={styles.forgot}>
            Forgot password?
          </a>

          <button type="submit" className={styles.primaryButton}>
            Log in
          </button>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <button type="button" className={styles.googleButton}>
            <img src={googleIcon} alt="" />
            Continue with Google
          </button>

          <p className={styles.switch}>
            New to CareerCompass? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </section>
    </div>
  )
}

export default Login
