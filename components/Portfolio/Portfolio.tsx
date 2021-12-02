/* eslint-disable @next/next/no-img-element */
import styles from "./portfolio.module.scss";

import Image from "next/image";
import { motion } from "framer-motion";

type Portfolio = {
  title: string;
  desc: string;
  image: string;
  locked?: boolean;
};

const Portfolio = ({ title, desc, image = "", locked }: Portfolio) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      className="relative"
    >
      <div className={styles.wrapper}>
        <img
          className={styles.cta}
          src={`/assets/portfolio/${locked ? "lock" : "arrow"}.png`}
          alt={`click to view more about ${title}`}
        />
      </div>
      <img src={image} alt={desc} className={styles.productImage} />
    </motion.article>
  );
};

export default Portfolio;
