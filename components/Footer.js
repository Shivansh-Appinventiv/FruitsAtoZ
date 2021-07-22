import styles from "../styles/common.module.css";
export default function Footer() {
  return (
    <footer className={styles.container}>
      {`Copyright `}&copy;{` 2021`}
    </footer>
  );
}
