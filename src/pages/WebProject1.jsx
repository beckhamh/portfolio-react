
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
            </div>
            <ProjectComponent1 name='Café hiyoto' description="Site web développé en Node.js pendant ma formation scolaire, où les utilisateurs peuvent créer un compte, sélectionner des articles (ajouter, supprimer, modifier) et les ajouter à leur panier d'achat avant de soumettre leur commande. Le site utilise Node.js pour le rendu côté serveur, offrant ainsi une expérience utilisateur fluide et réactive. De plus, le moteur de template Handelbars est utilisé pour générer les vues côté client, garantissant un affichage dynamique et attrayant des informations."
            p3='Site web' p4='Languages: js, html css, handelbars rendu serveur' p5='Environnement logiciel : Node.js' p6='Protocole: Https' p7='D_B: SqlLite'/>
            <Gallerie imgs={imgs} />
            
        </div>
        

        
    </>
}