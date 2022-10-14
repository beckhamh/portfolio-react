import styles from './MenuNavigation.module.css'
import { NavLink } from "react-router-dom";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function MenuNavigation(){
    return  <nav className={styles.menu} >
            <ul>
                <li>
                    {/* className={(navInfo) => navInfo.isActive ? styles.lien : undefined} on peut decontruire l'objet navInfo pour chercher directement isActive*/}
                    <NavLink to="/" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>.is()</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="projects" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>.work()</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                <NavLink to="about" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>.about()</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                <NavLink to="contact" className={({isActive}) => isActive ? styles.lienActive : styles.lien}>.contact()</NavLink>
                </li>
            </ul>
                <a target="_blank" href='https://www.linkedin.com/in/belkacem-heraoua/' rel="noreferrer" className={styles.icon}>
                    <AiFillLinkedin />  
                </a>
                <a target="_blank" href='https://github.com/BeckhamH' rel="noreferrer" className={styles.icon}>
                    <AiFillGithub />
                </a>
        </nav>
    
    
}