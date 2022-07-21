import styles from './MenuNavigation.module.css'
import { NavLink } from "react-router-dom";

export default function MenuNavigation(){
    return <>
    <nav className={styles.menu} >
        <ul>
            <li>
                {/* className={(navInfo) => navInfo.isActive ? styles.lien : undefined} on peut decontruire l'objet navInfo pour chercher directement isActive*/}
                <NavLink to="/" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>home</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="projects" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>projects</NavLink>
            </li>
        </ul>
        <ul>
            <li>
            <NavLink to="contact" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>contact</NavLink>
            </li>
        </ul>
    </nav>
    
    </>
}