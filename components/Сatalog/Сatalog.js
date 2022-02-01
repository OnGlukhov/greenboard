import styles from "./Сatalog.module.sass";
// import { products } from "../../data/products";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Size from "../Size/Size";

export default function Сatalog({ width, products }) {
  const [productsFilter, setProductsFilter] = React.useState(products);
  const [button, setButton] = React.useState(null);
  // const [buttonList, setButtonList] = React.useState(0);
  const indexItem = (index) => {
    setButton(index);
  };

  function requestCategoty() {
    const res = products
      .map((i) => i.options.filter((v) => v.key === "Плотность"))
      .flat();
    let tmpArray = [];
    function itemCheck(item) {
      if (tmpArray.indexOf(item.value) === -1) {
        return tmpArray.push(item.value);
      }
      return;
    }

    const uniqueСollections = res.filter((item) => itemCheck(item));
    const number = uniqueСollections.map((i) => {
      return parseInt(i.value.match(/\d+/g));
    });

    const result = number.sort((a, b) => (a > b ? 1 : -1));

    const newArr = [];
    result.map((i) => {
      newArr.push({ value: i + " кг/м³", key: "Плотность" });
    });

    return newArr;
  }

  const category = requestCategoty();

  const filterProducts = (size) => {
    if (!size) {
      return setProductsFilter(products);
    } else {
      setProductsFilter(
        products.filter((i) => i.options?.find((s) => s.value === size))
      );
    }
  };

  return (
    <section className={styles.catalog} id="catalog">
      <h1 className={styles.catalog_title}>
        Цены на фибролитовые плиты <span>GreenBoard</span>
      </h1>
      <p className={styles.catalog_subtitle}>
        У нас представлены фибролитовые плиты разных размеров и плотности
      </p>
      <div className={styles.catalog_size}>
        {width > 700 ? (
          <Size
            filterProducts={filterProducts}
            indexItem={indexItem}
            button={button}
            category={category}
          />
        ) : (
          <Dropdown
            filterProducts={filterProducts}
            indexItem={indexItem}
            button={button}
            category={category}
          />
        )}
        <div className={styles.catalog_line}></div>
      </div>
      <div className={styles.catalog_products}>
        {productsFilter.map((product, i) => (
          <div key={i} className={styles.catalog_product}>
            <img
              className={styles.catalog_product_img}
              src={`https://xn--j1ano.com${product.path}${product.images[0]}`}
            />
            <div className={styles.overlay}>
              <p className={styles.catalog_product_price}>
                {product.cost} руб/шт
              </p>
              <p className={styles.catalog_product_size}>{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
