import styles from './ProjectComponent1.module.css'

export default function ProjectComponent1(props){
    return <div className={styles.component1}>
        <p className={styles.p1}>{props.name}</p>
        <div className={styles.p2}>
            <span className={styles.title}>Description</span>
            {props.description}
            <span className={styles.p3}>{props.p3}</span>
            <span className={styles.p3}>{props.p4}</span>
            <span className={styles.p3}>{props.p5}</span>
            <span className={styles.p3}>{props.p6}</span>
            <span className={styles.p3}>{props.p7}</span>
        </div>
    </div>
}