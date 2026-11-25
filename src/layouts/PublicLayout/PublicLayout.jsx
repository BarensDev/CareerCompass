import { Link, Outlet } from 'react-router-dom'

import logo from '../../assets/svg/00-shared/logo-full.svg'
import styles from './PublicLayout.module.css'


function PublicLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="CareerCompass" />
        </Link>
        
        <div className={styles.actions}>
          <Link to="/login" className={styles.login}>
            Log in
          </Link>
          <Link to="/register" className={styles.register}>
            Register
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default PublicLayout
