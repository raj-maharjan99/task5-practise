import "./App.module.css";

import styles from "./App.module.css";
function App() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <h1>Namaste</h1>
        </header>
        <a href="https://www.google.com/">
          {" "}
          <u>
            <b>Google</b>
          </u>
        </a>

        <a href="https://www.amazon.com/">
          {" "}
          <u>
            <b>Amazon</b>
          </u>
        </a>
        <a href="https://www.netflix.com//">
          {" "}
          <u>
            <b>Netflix</b>
          </u>
        </a>
        <main className={styles.main}>
          <div className={styles.box}>
            {""}
            South Korea, an East Asian nation on the southern half of the Korean
            Peninsula, shares one of the worlds most heavily militarized borders
            with North Korea. Its equally known for its green, hilly countryside
            dotted with cherry trees and centuries-old Buddhist temples, plus
            its coastal fishing villages, sub-tropical islands and high-tech
            cities such as Seoul, the capital.
          </div>
        </main>
        <footer className={styles.footer}>
          The Lunar New Years Day Seollal is one of the festivals that represent
          Korea. On the Lunar New Years Day, families gather to share special
          foods such as tteokguk and hold rituals called charye a simplified
          form of an ancestral rite. Children and sometimes youths wear new
          clothes called seolbim to bow before their elders called sebae wishing
          them a long life. After the bow, the elders are customarily expected
          to give money gifts called sebaetdon to those who bowed.{" "}
          <h6>copyright &copy; 2023 Samragi </h6>
        </footer>
      </div>
    </>
  );
}

export default App;
