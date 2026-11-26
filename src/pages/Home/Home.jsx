import { Link } from 'react-router-dom'

import heroIllustration from '../../assets/svg/01-home/hero-illustration-full.svg'
import featureResume from '../../assets/svg/01-home/feature-resume-analysis.svg'
import featureGuidance from '../../assets/svg/01-home/feature-actionable-guidance.svg'
import featureSaved from '../../assets/svg/01-home/feature-saved-for-later.svg'
import arrowRight from '../../assets/svg/07-icons/white/arrow-right.svg'
import styles from './Home.module.css'
import HomeFeature from '../../components/HomeFeature'

const features = [
  {
    icon: featureResume,
    title: 'Resume analysis',
    text: 'Get a clearer view of your experience.',
  },
  {
    icon: featureGuidance,
    title: 'Actionable guidance',
    text: 'Identify opportunities to grow.',
  },
  {
    icon: featureSaved,
    title: 'Saved for later',
    text: 'Keep your analyses and revisit anytime.',
  },
]

function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>AI-powered career clarity</p>

          <h1 className={styles.title}>
            Turn your resume into clear <span className={styles.highlight}>next steps</span>.
          </h1>

          <p className={styles.description}>
            Understand your strengths, discover areas to improve, and prepare for what comes next
            with AI-powered career guidance.
          </p>

          <Link to="/analyze" className={styles.cta}>
            Analyze my resume
            <img src={arrowRight} alt="" />
          </Link>
        </div>

        <div className={styles.visual}>
          <p className={styles.note}>A clearer direction for what&apos;s next.</p>
          <img src={heroIllustration} alt="" className={styles.illustration} />
        </div>
      </section>

      <section className={styles.features}>
        {features.map((feature) => (
          <HomeFeature key={feature.title} icon={feature.icon} title={feature.title} text={feature.text} />
        ))}
      </section>
    </div>
  )
}

export default Home
