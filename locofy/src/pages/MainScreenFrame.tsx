import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ContactContent from "../components/ContactContent";
import WassenPrijzen from "../components/WassenPrijzen";
import StrijkenPrijzen1 from "../components/StrijkenPrijzen1";
import StrijkenPrijzen from "../components/StrijkenPrijzen";
import styles from "./MainScreenFrame.module.css";

const MainScreenFrame: FunctionComponent = () => {
  return (
    <div className={styles.mainScreenFrame}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.e868e74436704fa3990935fff8Icon}
            alt=""
            src="/E868E744-3670-4FA3-9909-35FFF8293831-1@2x.png"
          />
          <div className={styles.irongirl}>Irongirl</div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.strijkserviceVleutendeMeernContainer}>
            <p className={styles.strijkservice}>Strijkservice</p>
            <p className={styles.strijkservice}>Vleuten/De Meern</p>
          </div>
          <div className={styles.strijkserviceVleutendeMeernContainer}>
            <p className={styles.strijkservice}>Persoonlijke service</p>
            <p className={styles.strijkservice}>Snel,voordelig</p>
            <p className={styles.enGoed}>{`en goed  `}</p>
          </div>
          <div className={styles.telefoonOfWhatsappContainer}>
            <p className={styles.strijkservice}>Telefoon of WhatsApp</p>
            <p className={styles.strijkservice}>06-33401173</p>
          </div>
        </div>
      </div>
      <main className={styles.services}>
        <section className={styles.wassenCard}>
          <h3 className={styles.wassen}>Wassen</h3>
          <img
            className={styles.washingIcon1}
            alt=""
            src="/washing-icon-1@2x.png"
          />
          <div className={styles.laatWeZorgeloos}>
            Laat we zorgeloos aan ons over voor een frisse en schone garderobe.
          </div>
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 112, height: 36 }}
          />
        </section>
        <section className={styles.wassenCard}>
          <h3 className={styles.wassen}>Strijken</h3>
          <img
            className={styles.ironIcon}
            loading="lazy"
            alt=""
            src="/iron-icon@2x.png"
          />
          <div className={styles.laatWeZorgeloos}>
            <p className={styles.strijkservice}>
              Ontdek hoe gemakkelijk het is om
            </p>
            <p className={styles.strijkservice}>
              je strijkwerk door Iron Girl te laten doen.
            </p>
          </div>
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 112, height: 36 }}
          />
        </section>
        <section className={styles.contactCard}>
          <h3 className={styles.contact}>Contact</h3>
          <img
            className={styles.call93809791Icon}
            alt=""
            src="/call-9380979-1@2x.png"
          />
          <div className={styles.neemContactOpVertelWatVoParent}>
            <div className={styles.neemContactOpContainer}>
              <p
                className={styles.strijkservice}
              >{`Neem contact op, vertel wat voor `}</p>
              <p className={styles.strijkservice}>
                je kunnen doe en maak een afspraak.
              </p>
            </div>
            <div className={styles.button2}>
              <h3 className={styles.meer}>Meer</h3>
            </div>
          </div>
        </section>
        <section className={styles.wassenCard}>
          <h3 className={styles.wassen}>Prijzen</h3>
          <img
            className={styles.priceTag77119861Icon}
            alt=""
            src="/price-tag-7711986-1@2x.png"
          />
          <div className={styles.laatWeZorgeloos}>
            Wij verzorgen het strijken van vele producten, van kleding tot
            linnengoed, tegen een betaalbare prijs.
          </div>
          <div className={styles.button3}>
            <h3 className={styles.meer}>Meer</h3>
          </div>
        </section>
      </main>
      <section className={styles.cta2}>
        <h3 className={styles.maakEenAfspraak}>
          Maak een afspraak via WhatsApp
        </h3>
        <div className={styles.ctaButton}>
          <h3 className={styles.klikHier}>Klik hier</h3>
          <img
            className={styles.alexanderShatovQsuer9xyoyUIcon}
            alt=""
            src="/alexander-shatov-qsuER9xYOY-unsplash-1@2x.png"
          />
        </div>
      </section>
      <div className={styles.ironGirlWasEnStrijkseviceWrapper}>
        <h3 className={styles.ironGirlWas}>Iron Girl Was -en Strijksevice</h3>
      </div>
      <div className={styles.hebJeHetTeDrukEnGeenTijWrapper}>
        <div className={styles.hebJeHetContainer}>
          <p className={styles.strijkservice}>
            Heb je het te druk en geen tijd om te wassen of strijken?
          </p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>
            Wij nemen het graag van je over.
          </p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p
            className={styles.strijkservice}
          >{`Is het strijken je te zwaar of heb je te `}</p>
          <p className={styles.strijkservice}>veel strijkgoed?</p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>
            Wij verzorgen al jouw strijkgoed, van kleding tot bedden- en
            linnengoed.
          </p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p
            className={styles.strijkservice}
          >{`Ook als je het wassen liever aan ons wilt `}</p>
          <p className={styles.strijkservice}>
            overlaten kun je op ons rekenen. Helemaal makkelijk is het
            natuurlijk om ons het wassen en strijken beide te laten doen.
          </p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>
            Zo maak voor jou het leven makkelijker, en hou jij meer tijd over
            voor leuke dingen. Je kunt altijd contact opnemen om je was- en
            strijkgoed langs te brengen bij ons in Vleuten.
          </p>
        </div>
      </div>
      <div className={styles.adobestock327562945Preview1Parent}>
        <img
          className={styles.adobestock327562945Preview1Icon}
          alt=""
          src="/AdobeStock-327562945-Preview-1@2x.png"
        />
        <img
          className={styles.adobestock327562945Preview1Icon}
          alt=""
          src="/image-4@2x.png"
        />
      </div>
      <div className={styles.onzeWerkwijzeWrapper}>
        <h1 className={styles.onzeWerkwijze}>Onze werkwijze</h1>
      </div>
      <div className={styles.maakEenAfspraakLaatWetenWrapper}>
        <div className={styles.maakEenAfspraakContainer}>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Maak een afspraak : laat weten hoeveel strijkgoed je hebt `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Lever je strijkgoed af bij mijn locale `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>
                Laat we weten producten je opgehangen en gevouwen terug wilt
                hebben
              </span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Wij vertel je wanner je het strijkgoed weer kunt ophalen `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Wij zorg ervoor dat alles perfect netjes gestreken is `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Bij ophalen is alles naar wens netjes gevouwen en opgehangen `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Er is momenteel geen mogelijkheid vooreen ophaal- en bezorgservice `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>
            <span>{`  `}</span>
            <span className={styles.wassen2}>{`Wassen `}</span>
          </p>
          <p className={styles.mainScreenFrameStrijken}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Wasgoed ontvangen we graag in een `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>
            {" "}
            zak, eventueel ook in een mand
          </p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Wit en kleur aparte was `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`30 graden `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>Drogen</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>Vouwen</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <p className={styles.mainScreenFrameStrijken}> Strijken</p>
          <p className={styles.mainScreenFrameStrijken}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>Het is handig als je zelf kledinghangers</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>{`   kunt afgeven `}</p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Wij zorgen ervoor dat alles perfect `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>{`  netjes gestreken is `}</p>
          <p className={styles.strijkservice}>&nbsp;</p>
          <ul className={styles.maakEenAfspraakLaatWeten}>
            <li>
              <span>{`Binnen 3 tot dagen kun je het strijkgoed weer ophalen `}</span>
            </li>
          </ul>
          <p className={styles.strijkservice}>{` `}</p>
        </div>
      </div>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-6@2x.png" />
      <img
        className={styles.washingBackground1Icon}
        alt=""
        src="/washing-background-1@2x.png"
      />
      <div className={styles.onzeWerkwijzeWrapper}>
        <h2 className={styles.mainScreenFrameContact}>Contact</h2>
      </div>
      <section className={styles.contact2}>
        <ContactContent />
      </section>
      <img className={styles.cta1Icon} alt="" src="/CTA-1@2x.png" />
      <img
        className={styles.image9Icon}
        alt=""
        src="/steamer-pink-shirt-cropped-1@2x.png"
      />
      <div className={styles.prijzenHeader}>
        <h2 className={styles.mainScreenFrameContact}>Prijzen</h2>
        <h3 className={styles.deBetalingKan}>
          De betaling kan gedaan worden met een Tikkie
        </h3>
      </div>
      <section className={styles.prijzenFrame}>
        <WassenPrijzen />
        <StrijkenPrijzen1 />
        <StrijkenPrijzen
          kinderkledingTmMaat158="Kinderkleding t/m maat 158"
          tot6Kg="Overhemd"
          prop="€1,80"
          tot6Kg1="Blouse"
          prop1="€1,80"
          tot6Kg2="Blouse of overhemd korte mouwen"
          prop2="€1,80"
          tot6Kg3="Colbert"
          prop3="€1,80"
          tot6Kg4="Gilet"
          prop4="€1,80"
          tot6Kg5="Rok"
          prop5="€1,80"
          tot6Kg6="Korte broek"
          prop6="€1,80"
        />
        <StrijkenPrijzen
          kinderkledingTmMaat158="Linnen- en beddengoed"
          tot6Kg="Laken 1-persoons"
          prop="€2,20"
          tot6Kg1="Laken 2-persoons"
          prop1="€3,00"
          tot6Kg2="Dekbed 1-persoons"
          prop2="€2,50"
          tot6Kg3="Dekbed 2-persoons"
          prop3="€3,70"
          tot6Kg4="Kussensloop"
          prop4="€1,00"
          tot6Kg5="Tafellaken"
          prop5="€3,00"
          tot6Kg6="Tafelloper"
          prop6="€1,10"
        />
      </section>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.cta11Icon} alt="" src="/cta1-1@2x.png" />
      <div className={styles.footer}>
        <footer className={styles.copyright2025IrongirlnlPadContainer}>
          <p className={styles.strijkservice}>© Copyright 2025 irongirl.nl</p>
          <p className={styles.strijkservice}>
            Paddenstoelenlaan 15, 3451 PZ Vleuten
          </p>
        </footer>
        <img
          className={styles.googleMaps1Icon}
          alt=""
          src="/google-maps-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MainScreenFrame;
