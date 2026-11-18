import { Link } from 'react-router-dom'

import keyInsightsIcon from '../../assets/svg/06-history-details/key-insights-icon.svg'
import strengthsIcon from '../../assets/svg/06-history-details/insight-strengths.svg'
import improveIcon from '../../assets/svg/06-history-details/insight-areas-to-improve.svg'
import nextStepsIcon from '../../assets/svg/06-history-details/insight-next-steps.svg'
import arrowLeft from '../../assets/svg/07-icons/blue/arrow-left.svg'
import closeIcon from '../../assets/svg/07-icons/navy/close-x.svg'
import plusIcon from '../../assets/svg/07-icons/navy/plus.svg'
import styles from './HistoryDetails.module.css'

// Placeholder content until the analysis comes from Firebase
const insights = [
  {
    icon: strengthsIcon,
    title: 'Strengths',
    items: [
      'Diverse experience across digital marketing channels.',
      'Demonstrated ability to work with cross-functional teams.',
      'Strong focus on data-driven decisions.',
    ],
  },
  {
    icon: improveIcon,
    title: 'Areas to improve',
    items: [
      'Add more specific, measurable results where possible.',
      'Highlight key skills earlier in your resume.',
      'Consider including relevant industry keywords.',
    ],
  },
  {
    icon: nextStepsIcon,
    title: 'Suggested next steps',
    items: [
      'Quantify impact with clear outcomes.',
      'Strengthen your professional summary.',
      'Tailor your experience to your target roles.',
    ],
  },
]

const tags = ['Marketing', 'Resume']

function HistoryDetails() {
  return (
    <div className={styles.page}>
      <Link to="/history" className={styles.back}>
        <img src={arrowLeft} alt="" />
        Back to history
      </Link>

      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Marketing resume review</h1>
          <p className={styles.meta}>
            <span>Strengths and weaknesses</span>
            <span className={styles.metaDot}>·</span>
            <span>October 21, 2026</span>
          </p>
        </div>

        <button type="button" className={styles.deleteButton}>
          <span className={styles.trashIcon} aria-hidden="true" />
          Delete
        </button>
      </header>

      <nav className={styles.tabs}>
        <button type="button" className={`${styles.tab} ${styles.tabActive}`}>
          Analysis
        </button>
        <button type="button" className={styles.tab}>
          Original resume
        </button>
      </nav>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>
          <img src={keyInsightsIcon} alt="" />
          Key insights
        </h2>

        <div className={styles.insights}>
          {insights.map((insight) => (
            <div key={insight.title} className={styles.insight}>
              <h3 className={styles.insightTitle}>
                <img src={insight.icon} alt="" />
                {insight.title}
              </h3>
              <ul className={styles.insightList}>
                {insight.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Detailed analysis</h2>
        <p className={styles.paragraph}>
          Your resume shows a solid foundation in marketing, with hands-on experience in campaign
          coordination, content creation and performance reporting. You demonstrate familiarity
          with digital channels and cross-functional collaboration, which are valuable skills in
          many marketing roles. To strengthen your profile, consider adding specific achievements
          and measurable results to demonstrate the impact of your work.
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Title and tags</h2>

        <div className={styles.editRow}>
          <input
            type="text"
            defaultValue="Marketing resume review"
            className={styles.input}
            aria-label="Analysis title"
          />
          <button type="button" className={styles.saveButton}>
            Save changes
          </button>
        </div>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
              <button type="button" className={styles.removeTag} aria-label={`Remove ${tag}`}>
                <img src={closeIcon} alt="" />
              </button>
            </span>
          ))}
          <button type="button" className={styles.addTag}>
            <img src={plusIcon} alt="" />
            Add tag
          </button>
        </div>
      </section>
    </div>
  )
}

export default HistoryDetails
