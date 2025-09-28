import { FunctionComponent } from "react";
import styles from "./WassenPrijzen.module.css";

export type WassenPrijzenType = {
  className?: string;
};

const WassenPrijzen: FunctionComponent<WassenPrijzenType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.wassenPrijzen, className].join(" ")}>
      <h3 className={styles.wassen}>Wassen</h3>
      <div className={styles.prijzenList}>
        <div className={styles.priceTiers}>
          <div className={styles.tot6Kg}>Tot 6 kg</div>
          <div className={styles.tot6Kg}>€16,50</div>
        </div>
        <div className={styles.wassenPrijzenPriceTiers}>
          <div className={styles.tot6Kg}>Elke extra kg</div>
          <div className={styles.tot6Kg}>€2,50</div>
        </div>
      </div>
    </div>
  );
};

export default WassenPrijzen;
