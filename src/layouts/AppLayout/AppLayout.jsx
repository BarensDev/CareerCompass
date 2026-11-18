import { Link, NavLink, Outlet } from 'react-router-dom'

import logo from '../../assets/svg/00-shared/logo-full.svg'
import orbitDecoration from '../../assets/svg/00-shared/sidebar-orbit-decoration.svg'
import divider from '../../assets/svg/00-shared/sidebar-divider.svg'
import homeNavy from '../../assets/svg/07-icons/navy/home.svg'
import homeBlue from '../../assets/svg/07-icons/blue/home.svg'
import documentNavy from '../../assets/svg/07-icons/navy/document.svg'
import documentBlue from '../../assets/svg/07-icons/blue/document.svg'
import historyNavy from '../../assets/svg/07-icons/navy/history-clock.svg'
import historyBlue from '../../assets/svg/07-icons/blue/history-clock.svg'
import chevronDown from '../../assets/svg/07-icons/navy/chevron-down.svg'
import logoutIcon from '../../assets/svg/07-icons/navy/logout.svg'
import styles from './AppLayout.module.css'

const navItems = [
  { to: '/', label: 'Home', icon: homeNavy, activeIcon: homeBlue, end: true },
  { to: '/analyze', label: 'Analyze Resume', icon: documentNavy, activeIcon: documentBlue },
  { to: '/history', label: 'History', icon: historyNavy, activeIcon: historyBlue },
]

const navLinkClass = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

function AppLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="CareerCompass" />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <img src={isActive ? item.activeIcon : item.icon} alt="" className={styles.navIcon} />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={styles.decoration}>
          <img src={orbitDecoration} alt="" className={styles.orbit} />
          <img src={divider} alt="" className={styles.divider} />
          <p className={styles.tagline}>A clearer direction for what&apos;s next.</p>
        </div>

        <div className={styles.user}>
          <span className={styles.avatar}>JD</span>
          <div className={styles.userInfo}>
            <button type="button" className={styles.userName}>
              Jordan Davis
              <img src={chevronDown} alt="" className={styles.chevron} />
            </button>
            <Link to="/login" className={styles.logout}>
              <img src={logoutIcon} alt="" />
              Log out
            </Link>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
