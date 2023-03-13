import styles from '@/styles/Skeleton.module.css';

function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.sBanner}></div>
      <div className={styles.sHeader}></div>
      <div className={styles.sContent}></div>
      <div className={styles.sContent}></div>
      <div className={styles.sContent}></div>
    </div>
  );
}

export default Skeleton;
