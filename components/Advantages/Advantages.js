import styles from "./Advantages.module.sass";
export default function Advantages() {
  return (
    <section className={styles.advantages} id="advantages">
      <h3 className={styles.advantages_title}>
        Достоинства фибролитовых плит <span>GreenBoard</span>
      </h3>
      <article className={styles.advantages_container}>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Длительный срок службы</p>
            <p className={styles.content_subtitle}>
              Срок службы превышает 100 лет и со временем прочность плит растет
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Пожарная безопасность</p>
            <p className={styles.content_subtitle}>
              Плиты имеют класс пожарной безопасности Г1 (трудногорючие)
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Устойчивость к влаге</p>
            <p className={styles.content_subtitle}>
              Материал не рассыпается при намокании, высыхают без разрушения
              структуры
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Ударопрочность</p>
            <p className={styles.content_subtitle}>
              Плиты ГринБорд обладают повышенной сейсмостойкостью
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Звукоизоляция и акустический комфорт
            </p>
            <p className={styles.content_subtitle}>
              Если фибролитовые плиты не штукатурить и не шпаклевать, то звук в
              помещении будет приглушенным и объемным, как в кинотеатрах
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Отсутствие очагов влажности в плите
            </p>
            <p className={styles.content_subtitle}>
              Плиты полностью защищены от воздействия внешних факторов, таких
              как грибок
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Значительное тепловое сопротивление
            </p>
            <p className={styles.content_subtitle}>
              Не уменьшается со временем и под влиянием загрязнений, нагревания
              и излучения
            </p>
          </div>
        </div>
      </article>
      <h3 className={`${styles.advantages_title} ${styles.margin}`}>
        Применение фибролитовых плит<span> GreenBoard</span>
      </h3>
      <article className={styles.advantages_container}>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Подвесные потолки</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Плоская кровля</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Звукоизоляция и шумопоглощение
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>SIP технология</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Каркасные стены и перегородки
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Крыши</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Несъемная опалубка</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Полы</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Утеплитель</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Шумозащитные экраны</p>
          </div>
        </div>
      </article>
    </section>
  );
}
