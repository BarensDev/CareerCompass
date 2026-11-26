import { Link, NavLink, Outlet } from 'react-router-dom'

import logo from '../../assets/svg/00-shared/logo-full.svg'
import styles from './PublicLayout.module.css'

const navLinkClass = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

function PublicLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="CareerCompass" />
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/analyze" className={navLinkClass}>
            Analyze Resume
          </NavLink>
          <NavLink to="/history" className={navLinkClass}>
            History
          </NavLink>
        </nav>

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
