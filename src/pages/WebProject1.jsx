
import { Helmet } from 'react-helmet-async';
import styles from './MainProjects.module.css';

import { GiFastBackwardButton } from "react-icons/gi";

import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import commandes from '../ressources/commandes.jpg';
import connexion from '../ressources/connexion.jpg';
import inscription from '../ressources/inscription.jpg';
import menu from '../ressources/menu.jpg';
import panier from '../ressources/panier.png';

import Gallerie from '../components/Gallerie';

export default function WebProject1() {
    let imgs = [{ src: inscription},{ src: connexion},{ src: menu},{ src: panier},{ src: commandes }];
    return <>
        <Helmet>
            <meta name='description' content='page representant un projet web developpé avec node.js, rendue serveur heandelbars' />
            <title>WebProject1 - Portfolio Belkacem</title>
        </Helmet>

        <div className={styles.mainpage}>
            <div className={styles.back}>
                <GiFastBackwardButton className={styles.iconback}/>
                <span className={styles.txtback}>Back</span>
            </div>
            <ProjectComponent1 name='Café hiyoto' description='Web site developed in Node.js during my school career, user can create an account and then 
            be able to select items (add, delete, modify) and put them in the shopping cart and submit his order.'
            p3='Web application' p4='Languages: handlebars, js, html, css' p5='Software Platform: Node.js' p6='Protocol: Https' p7='D_B: SqlLite'/>
            <Gallerie imgs={imgs} />
            
        </div>
        

        
    </>
}