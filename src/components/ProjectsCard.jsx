import styles from './ProjectsCard.module.css'
import { GiClick } from "react-icons/gi";

export default function ProjectsCard(props){
    return <div className={styles.card} >
        <img src={props.img} alt="img project" className={styles.img}/>
        <p className={styles.p}>{props.name} <GiClick className={styles.icon}/></p> 
    </div>
    
    
}