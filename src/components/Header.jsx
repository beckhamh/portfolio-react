import styles from './Header.module.css'
import MenuNavigation from './MenuNavigation'



export default function Header(){
    
    return <><div className={styles.header}>
        <h2 className={styles.h2}>belkacem.h</h2>
        <MenuNavigation />
    </div>
</>
        
    
    
}