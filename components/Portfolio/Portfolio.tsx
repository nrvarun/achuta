/* eslint-disable @next/next/no-img-element */
import styles from "./portfolio.module.scss";

import Image from "next/image";

type Portfolio = {
  title: string;
  desc: string;
  image: string;
  locked?: boolean;
};

const Portfolio = ({ title, desc, image = "", locked }: Portfolio) => {
  return (
    <article className="relative">
      <div className={styles.wrapper}>
        <img
          className={styles.cta}
          src={`/assets/portfolio/${locked ? "lock" : "arrow"}.png`}
          alt={`click to view more about ${title}`}
        />
      </div>
      <img src={image} alt={desc} className={styles.productImage} />
    </article>
  );
};

export default Portfolio;
