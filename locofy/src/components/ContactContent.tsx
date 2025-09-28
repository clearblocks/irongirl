import { FunctionComponent } from "react";
import styles from "./ContactContent.module.css";

export type ContactContentType = {
  className?: string;
};

const ContactContent: FunctionComponent<ContactContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contactContent, className].join(" ")}>
      <h3 className={styles.belOns}>Bel ons</h3>
      <div className={styles.call93809792Parent}>
        <img
          className={styles.call93809792Icon}
          alt=""
          src="/call-9380979-1@2x.png"
        />
        <h3 className={styles.callNumber}>06-33401173</h3>
      </div>
      <div className={styles.adres}>
        <img
          className={styles.googleMaps1Icon}
          alt=""
          src="/google-maps-1@2x.png"
        />
        <div className={styles.paddenstoelenlaan153451PzContainer}>
          <p className={styles.pzVleuten}>Paddenstoelenlaan 15</p>
          <p className={styles.pzVleuten}>3451 PZ Vleuten</p>
        </div>
      </div>
      <div className={styles.stuurBericht}>
        <img className={styles.mailIcon1} alt="" src="/mail-icon-1@2x.png" />
        <h3 className={styles.belOns}>Stuur een bericht</h3>
      </div>
      <div className={styles.naamInput}>
        <h3 className={styles.naam}>{`Naam `}</h3>
        <div className={styles.inputFields} />
      </div>
      <div className={styles.naamInput}>
        <h3 className={styles.naam}>{`E- mailadres `}</h3>
        <div className={styles.emailInputChild} />
      </div>
      <div className={styles.naamInput}>
        <h3 className={styles.naam}>{`Telefoon `}</h3>
        <div className={styles.phoneInputChild} />
      </div>
      <h3 className={styles.naam}>Bericht</h3>
      <div className={styles.messageBox} />
      <div className={styles.submitArea}>
        <div className={styles.submitButtonArea}>
          <h3 className={styles.naam}>Versturen</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
