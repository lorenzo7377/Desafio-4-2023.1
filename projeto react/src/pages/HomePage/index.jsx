import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div id={styles.box}>
      <div id={styles.caixa}>
        <h1 id={styles.fazer}>A fazer</h1>
        <button id={styles.primeirobotao}>+</button>
        <button id={styles.segundobotao}>+</button>
        <button id={styles.terceirobotao}>+</button>
      </div>
    </div>
  );
}
