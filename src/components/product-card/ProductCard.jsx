import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ id, image, alt, title, descript, price, addItem, item, removeItem }) => {
  
  const quantity = item.length > 0 ? item[0].quantity: 0;

  return (
    <div className={styles.card}>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{descript}</h4>
      <h5>${price}</h5>
      <div style={{display:'flex', 
    justifyContent:'space-between'}}>
      <span className={styles.button} onClick={() => removeItem(id, quantity-1)}>-</span>
        <p className={styles.cantidad}>{quantity}</p>
        <span className={styles.button} onClick={() => addItem({id, title, image, alt, descript, price}, quantity+1)}>+</span>
      </div>
    </div>
  );
};

export default ProductCard;
