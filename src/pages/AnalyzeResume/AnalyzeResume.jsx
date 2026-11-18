import compass from '../../assets/svg/04-analyze/compass-small.svg'
import analysisTypeIcon from '../../assets/svg/04-analyze/analysis-type-icon.svg'
import chevronDown from '../../assets/svg/07-icons/navy/chevron-down.svg'
import sparkle from '../../assets/svg/07-icons/white/sparkle.svg'
import arrowRight from '../../assets/svg/07-icons/white/arrow-right.svg'
import lockIcon from '../../assets/svg/07-icons/navy/lock.svg'
import styles from './AnalyzeResume.module.css'

const exampleResume = `Jordan Davis
Marketing Professional

PROFESSIONAL SUMMARY
Marketing professional with 5+ years of experience in digital campaigns, content creation and performance analysis...`

function AnalyzeResume() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Analyze resume</p>
          <h1 className={styles.title}>
            Read your resume differently<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.description}>
            Get a clear, structured analysis of your experience, with practical guidance to help you
            prepare for what&apos;s next.
          </p>
        </div>
        <img src={compass} alt="" className={styles.compass} />
      </header>

      <form className={styles.form}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1 / Choose analysis type</h2>

          <button type="button" className={styles.select}>
            <img src={analysisTypeIcon} alt="" className={styles.selectIcon} />
            <span className={styles.selectText}>
              <span className={styles.selectTitle}>Resume strengths and weaknesses</span>
              <span className={styles.selectDescription}>
                Identify key strengths, potential gaps and areas to improve.
              </span>
            </span>
            <img src={chevronDown} alt="" className={styles.chevron} />
          </button>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>2 / Paste your resume text</h2>
            <button type="button" className={styles.linkButton}>
              Use an example
            </button>
          </div>

          <textarea
            className={styles.textarea}
            defaultValue={exampleResume}
            placeholder="Paste your resume here..."
            rows={9}
          />

          <div className={styles.counter}>
            <span>1,249 characters</span>
            <span>10,000 max</span>
          </div>
        </section>

        <button type="submit" className={styles.submit}>
          <img src={sparkle} alt="" />
          Analyze resume
          <img src={arrowRight} alt="" />
        </button>

        <p className={styles.privacy}>
          <img src={lockIcon} alt="" />
          Your resume content is used only to generate your analysis and is not shared with third
          parties.
        </p>
      </form>
    </div>
  )
}

export default AnalyzeResume
