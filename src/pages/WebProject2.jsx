
import { Helmet } from 'react-helmet-async';

import Gallerie from '../components/Gallerie';
import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import img1 from '../ressources/homeServiceHome.png';
import img2 from '../ressources/homeServiceInscription.jpg';
import img3 from '../ressources/homeServiceConnexion.png';
import img4 from '../ressources/homeServicePostPrestation.png';
import img5 from '../ressources/homeServiceCurrentAnn.png';
import img6 from '../ressources/homeServiceContact.png';

export default function WebProject2(){
    let imgs = [{ src: img1},{ src: img2},{ src: img3},{ src: img4},{ src: img5 },{ src: img6 }];
    return <>
        <Helmet>
            <meta name='description' content='page representant un projet web developpé avec node.js en groupe, rendue serveur heandelbars'/>
            <title>WebProject2 - Portfolio Belkacem</title>
        </Helmet>
        <ProjectComponent1 name='Home Service' description="Projet développé en Node.js pour deux types de clients : ceux qui souhaitent publier un service et ceux qui souhaitent consulter les annonces et profiter de ces services. L'utilisateur peut créer, modifier et supprimer un service, ainsi que contacter le client. Le site est créé en utilisant le rendu client et le rendu serveur avec Node.js et Handlebars."
         p3='Site web' p4='Languages: js, html css, handelbars rendu serveur' p5='Environnement logiciel : Node.js' p6='Protocole: Https' p7='D_B: SqlLite'/>
        
        <Gallerie imgs={imgs} />
    </>
}