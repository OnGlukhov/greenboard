import styles from "./FirstScreen.module.sass";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { animations } from "../../styles/animations";

export default function FirstScreen() {
  return (
    <section className={styles.firstScreen} id="main">
      <div className={styles.firstScreen_wrapper_block}>
        <div className={styles.firstScreen_block}>
          <motion.div
            // className={`my-4 bg-belplit24`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.line.variants}
            transition={animations.line.transition}
            className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}
          ></motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            className={styles.firstScreen_title}
          >
            Фибролитовые плиты
            <span className={styles.firstScreen_span}> GreenBoard</span>
            <br></br>
            <p style={{ fontSize: "16px", color: "#74757f", margin: "15px 0" }}>
              Высокое качество по доступной цене
            </p>
            <span className={styles.firstScreen_span}>от 571 руб/шт</span>
          </motion.h1>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            className={styles.firstScreen_subtitle}
          >
            Строительный материал нового поколения. Производятся фибролитовые
            плиты из предварительно замоченной в водном растворе минералов
            древесной шерсти. Для производства используется древесина мягких
            хвойных пород. Более прочая и гибкая структура по сравнению с
            другими строительными плитами. Уникальная структура плит совмещает
            лучшие качества дерева и камня. Толщина плит GreenBoard варьируется
            от 10 до 50 мм.
          </motion.p>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={300}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={300}
          >
            <button className={styles.firstScreen_button}>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </Link>
        </div>
      </div>

      {/* <div className={styles.over}></div> */}
      <div className={styles.firstScreen_wrapper}></div>
    </section>
  );
}
