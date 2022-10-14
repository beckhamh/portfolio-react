
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
        <ProjectComponent1 name='Home Service' description='Project developed in node.js for two types of customers, those who want to post a service, 
        and those who want to see the ads and take advantage of these services, the user can create, modify, delete a service and contact the customer.'
        p3='Web application' p4='Languages: handlebars, js, html, css' p5='Software Platform: Node.js' p6='Protocol: Https' p7='D_B: SqlLite'/>
        
        <Gallerie imgs={imgs} />
    </>
}