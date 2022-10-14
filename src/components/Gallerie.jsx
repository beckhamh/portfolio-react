import { useState, useEffect } from "react";
import styles from './Gallerie.module.css';
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

export default function Gallerie(props) {
    
    let imgs =props.imgs;
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setIndex(0);
    }, []);
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1);
      } else {
        setIndex(index - 1);
      }
    };
    return (
      <div className={styles.gallerie}>
        <HiArrowCircleLeft onClick={prev} className={styles.icon1}/>
        <img className={styles.img} src={props.imgs[index].src} alt='web project' />
        <HiArrowCircleRight onClick={next} className={styles.icon2}/>
      </div>
    );
  }