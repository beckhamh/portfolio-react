
import styles from './ProjectComponent2.module.css'

export default function ProjectComponent2(props){
    return <div className={styles.container}>
        <div className={styles.component2}>
            <p className={styles.p1}>{props.description}</p>
            <img src={props.img} alt="imgProkect" className={styles.img}/>
        </div>
    </div>
    
    
}