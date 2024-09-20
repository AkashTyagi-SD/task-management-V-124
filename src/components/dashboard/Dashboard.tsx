import { FC } from "react";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default Dashboard;
