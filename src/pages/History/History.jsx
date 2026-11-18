import { Link } from 'react-router-dom'

import sunOrbit from '../../assets/svg/05-history/history-sun-orbit.svg'
import fileBlue from '../../assets/svg/05-history/file-tile-blue.svg'
import fileYellow from '../../assets/svg/05-history/file-tile-yellow.svg'
import fileGreen from '../../assets/svg/05-history/file-tile-green.svg'
import searchIcon from '../../assets/svg/07-icons/navy/search.svg'
import plusIcon from '../../assets/svg/07-icons/white/plus.svg'
import moreIcon from '../../assets/svg/07-icons/navy/more-vertical.svg'
import styles from './History.module.css'

const tabs = [
  { label: 'All analyses', count: 4, active: true },
  { label: 'Resume review', count: 1 },
  { label: 'Career guidance', count: 2 },
  { label: 'Skills and growth', count: 1 },
]

// Placeholder data until the analyses come from Firebase
const analyses = [
  {
    id: '1',
    icon: fileBlue,
    title: 'Marketing resume review',
    description: 'Review of current resume for marketing roles',
    type: 'Strengths and weaknesses',
    tags: [
      { label: 'Marketing', color: 'blue' },
      { label: 'Resume', color: 'gray' },
    ],
    date: 'Oct 21, 2026',
  },
  {
    id: '2',
    icon: fileYellow,
    title: 'Career development plan',
    description: 'Guidance for next career steps',
    type: 'Career guidance',
    tags: [
      { label: 'Growth', color: 'red' },
      { label: 'Career plan', color: 'gray' },
    ],
    date: 'Oct 14, 2026',
  },
  {
    id: '3',
    icon: fileGreen,
    title: 'Product manager analysis',
    description: 'Analysis for product management roles',
    type: 'Resume analysis',
    tags: [
      { label: 'Product', color: 'green' },
      { label: 'Interview', color: 'gray' },
    ],
    date: 'Oct 3, 2026',
  },
  {
    id: '4',
    icon: fileBlue,
    title: 'Updated resume analysis',
    description: 'Revised resume with new experience',
    type: 'Resume analysis',
    tags: [
      { label: 'Resume', color: 'green' },
      { label: 'Skills', color: 'gray' },
    ],
    date: 'Sep 18, 2026',
  },
]

function History() {
  return (
    <div className={styles.page}>
      <img src={sunOrbit} alt="" className={styles.decoration} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>History</p>
        <h1 className={styles.title}>
          Your work,
          <br />
          seen <em>more clearly</em>.
        </h1>
        <p className={styles.description}>
          Return to your saved career analyses whenever you need them. Review, edit or delete
          previous results to keep your career insights organized.
        </p>
      </header>

      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={tab.active ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </nav>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <img src={searchIcon} alt="" />
          <input type="search" placeholder="Search your analyses..." />
        </label>

        <Link to="/analyze" className={styles.newButton}>
          <img src={plusIcon} alt="" />
          New analysis
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Analysis type</th>
              <th>Tags</th>
              <th>Date ↓</th>
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {analyses.map((analysis) => (
              <tr key={analysis.id}>
                <td>
                  <div className={styles.titleCell}>
                    <img src={analysis.icon} alt="" className={styles.fileIcon} />
                    <div>
                      <p className={styles.rowTitle}>{analysis.title}</p>
                      <p className={styles.rowDescription}>{analysis.description}</p>
                    </div>
                  </div>
                </td>
                <td className={styles.type}>{analysis.type}</td>
                <td>
                  <div className={styles.tags}>
                    {analysis.tags.map((tag) => (
                      <span key={tag.label} className={`${styles.tag} ${styles[tag.color]}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </td>
                <td className={styles.date}>{analysis.date}</td>
                <td>
                  <div className={styles.actions}>
                    <Link to={`/history/${analysis.id}`} className={styles.view}>
                      View
                    </Link>
                    <button type="button" className={styles.more} aria-label="More options">
                      <img src={moreIcon} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History
