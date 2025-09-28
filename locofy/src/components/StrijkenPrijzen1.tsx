import { FunctionComponent } from "react";
import styles from "./StrijkenPrijzen1.module.css";

export type StrijkenPrijzen1Type = {
  className?: string;
};

const StrijkenPrijzen1: FunctionComponent<StrijkenPrijzen1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.strijkenPrijzen, className].join(" ")}>
      <h3 className={styles.strijken}>Strijken</h3>
      <h3 className={styles.damesEnHerenkleding}>Dames- en herenkleding</h3>
      <div className={styles.prijzenList}>
        <div className={styles.priceTier}>
          <div className={styles.tot6Kg}>Overhemd</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.strijkenPrijzenPriceTier}>
          <div className={styles.tot6Kg}>Blouse</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.priceTier2}>
          <div className={styles.tot6Kg}>Blouse of overhemd korte mouwen</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.priceTier3}>
          <div className={styles.tot6Kg}>Colbert</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.priceTier4}>
          <div className={styles.tot6Kg}>Gilet</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.priceTier5}>
          <div className={styles.tot6Kg}>Rok</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
        <div className={styles.priceTier6}>
          <div className={styles.tot6Kg}>Korte broek</div>
          <div className={styles.tot6Kg}>€1,80</div>
        </div>
      </div>
    </div>
  );
};

export default StrijkenPrijzen1;
