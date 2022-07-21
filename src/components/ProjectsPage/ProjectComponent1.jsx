import styles from './ProjectComponent1.module.css'

export default function ProjectComponent1(props){
    return <div className={styles.component1}>
        <p className={styles.p1}>{props.name}</p>
        <p className={styles.p2}>{props.description}</p>

    </div>
}