import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import MenuNavigation from './MenuNavigation'

import { HiMenu, HiX} from "react-icons/hi";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function Header(){
    const [menu, setMenu] = useState(false);
    const showMenu =()=>{
        setMenu(!menu);
    }

    return <>
        <div className={styles.header}>
            <NavLink to={'/'} className={styles.h1}>
                <h1 >BH</h1>
            </NavLink>
            <MenuNavigation />
        </div>
        <HiMenu onClick={showMenu} className={menu ? styles.iconMenuNonActive : styles.iconMenuActive}/>
        <HiX onClick={showMenu} className={menu ? styles.iconMenuActive : styles.iconMenuNonActive}/>
        <div className={menu ? styles.active : styles.noactive}>
            <nav className={styles.menuactive} >
                <ul>
                    <li>
                        {/* className={(navInfo) => navInfo.isActive ? styles.lien : undefined} on peut decontruire l'objet navInfo pour chercher directement isActive*/}
                        <NavLink to="/" onClick={showMenu} className={({isActive}) => isActive ? styles.lienActive : styles.lien}>Accueil</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="projects" onClick={showMenu} className={({isActive}) => isActive ? styles.lienActive : styles.lien}>Projets</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                    <NavLink to="about" onClick={showMenu} className={({isActive}) => isActive ? styles.lienActive : styles.lien}>À propos</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                    <NavLink to="contact" onClick={showMenu} className={({isActive}) => isActive ? styles.lienActive : styles.lien}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.iconheader}>
                <a target="_blank" href='https://www.linkedin.com/in/belkacem-heraoua/' rel="noreferrer" className={styles.icon}>
                    <AiFillLinkedin />  
                </a>
                <a target="_blank" href='https://github.com/BeckhamH' rel="noreferrer" className={styles.icon}>
                    <AiFillGithub />
                </a>
                </div>
        </div>
        
    </>

        
    
    
}