import { Link, Outlet } from 'react-router-dom'

import logo from '../../assets/svg/00-shared/logo-full.svg'
import styles from './AuthLayout.module.css'

function AuthLayout() {
  return (
    <div className={styles.layout}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="CareerCompass" />
      </Link>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
