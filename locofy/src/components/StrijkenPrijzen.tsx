import { FunctionComponent } from "react";
import styles from "./StrijkenPrijzen.module.css";

export type StrijkenPrijzenType = {
  className?: string;
  kinderkledingTmMaat158?: string;
  tot6Kg?: string;
  prop?: string;
  tot6Kg1?: string;
  prop1?: string;
  tot6Kg2?: string;
  prop2?: string;
  tot6Kg3?: string;
  prop3?: string;
  tot6Kg4?: string;
  prop4?: string;
  tot6Kg5?: string;
  prop5?: string;
  tot6Kg6?: string;
  prop6?: string;
};

const StrijkenPrijzen: FunctionComponent<StrijkenPrijzenType> = ({
  className = "",
  kinderkledingTmMaat158,
  tot6Kg,
  prop,
  tot6Kg1,
  prop1,
  tot6Kg2,
  prop2,
  tot6Kg3,
  prop3,
  tot6Kg4,
  prop4,
  tot6Kg5,
  prop5,
  tot6Kg6,
  prop6,
}) => {
  return (
    <div className={[styles.strijkenPrijzen, className].join(" ")}>
      <h3 className={styles.kinderkledingTmMaat}>{kinderkledingTmMaat158}</h3>
      <div className={styles.prijzenList}>
        <div className={styles.tot6KgParent}>
          <div className={styles.tot6Kg}>{tot6Kg}</div>
          <div className={styles.tot6Kg}>{prop}</div>
        </div>
        <div className={styles.tot6KgGroup}>
          <div className={styles.tot6Kg}>{tot6Kg1}</div>
          <div className={styles.tot6Kg}>{prop1}</div>
        </div>
        <div className={styles.tot6KgContainer}>
          <div className={styles.tot6Kg}>{tot6Kg2}</div>
          <div className={styles.tot6Kg}>{prop2}</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.tot6Kg}>{tot6Kg3}</div>
          <div className={styles.tot6Kg}>{prop3}</div>
        </div>
        <div className={styles.strijkenPrijzenTot6KgParent}>
          <div className={styles.tot6Kg}>{tot6Kg4}</div>
          <div className={styles.tot6Kg}>{prop4}</div>
        </div>
        <div className={styles.tot6KgParent2}>
          <div className={styles.tot6Kg}>{tot6Kg5}</div>
          <div className={styles.tot6Kg}>{prop5}</div>
        </div>
        <div className={styles.tot6KgParent3}>
          <div className={styles.tot6Kg}>{tot6Kg6}</div>
          <div className={styles.tot6Kg}>{prop6}</div>
        </div>
      </div>
    </div>
  );
};

export default StrijkenPrijzen;
