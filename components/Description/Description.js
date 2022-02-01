import styles from "./Description.module.sass";

export default function Description() {
  return (
    <section className={styles.description}>
      <h3 className={styles.description_title}>
        Фибролитовые плиты <span>GreenBoard</span>
      </h3>
      <div className={styles.description_wrapper}>
        <p className={styles.description_subtitle}>
          Многофункциональный, экологически безопасный строительный материал,
          удовлетворяющий всем критериям современного, комфортного и
          пожаробезопасного жилья.
        </p>
        <p className={styles.description_subtitle}>
          Фибролит Гринборд по объему состоит из древесной шерсти (60%) и
          портландцемента (39,8%) с добавлением натурального минерализатора
          (0,2%) – раствора силиката натрия (канцелярский клей) низкой
          концентрации для нейтрализации сахара в древесине (осина).
        </p>
        <p className={styles.description_subtitle}>
          По сути, фибролит Green Board – это «улучшенная древесина» - более
          прочная, но эластичная за счет сохранения всех полезных свойств
          массива древесины, при отсутствии таких дефектов, как: сучки,
          изменение направления волокон в связи с естественными условиями роста
          дерева, внутренние пустоты и трещины, а также легкая возгораемость и
          недостаточная биостойкость.
        </p>
      </div>
      {/* <div className={styles.description_percentages}>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon1.png"
            alt="ГИДРАЦИОННЫЕ ДОБАВКИ"
          />
          <p className={styles.description_item_number}>2 .5%</p>
          <p className={styles.description_item_text}>ГИДРАЦИОННЫЕ ДОБАВКИ</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon2.png"
            alt="ДЕРЕВЯННАЯ СТРУЖКА"
          />
          <p className={styles.description_item_number}>24 %</p>
          <p className={styles.description_item_text}>ДЕРЕВЯННАЯ СТРУЖКА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon3.png"
            alt="ВОДА"
          />
          <p className={styles.description_item_number}>8 .5%</p>
          <p className={styles.description_item_text}>ВОДА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon4.png"
            alt="ПОРТЛАНД-ЦЕМЕНТ"
          />
          <p className={styles.description_item_number}>65 %</p>
          <p className={styles.description_item_text}>ПОРТЛАНД-ЦЕМЕНТ</p>
        </div>
      </div> */}
    </section>
  );
}
