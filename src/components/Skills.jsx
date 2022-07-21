import styles from './Skills.module.css'

export default function Skills(props){
    return <div className={styles.skills}>
        <span className={styles.icon}>{props.children}</span>
        <span className={styles.nom}>{props.nom}</span>
    </div>

}