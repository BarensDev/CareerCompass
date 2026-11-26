import styles from '../pages/Home/Home.module.css'

export default function HomeFeature({ icon, title, text }) {
  return (
    <article className={styles.feature}>
      <img src={icon} alt="" className={styles.featureIcon} />
      <div>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureText}>{text}</p>
      </div>
    </article>
  );
}
