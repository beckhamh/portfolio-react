
import { Helmet } from 'react-helmet-async';

import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import ProjectComponent2 from '../components/ProjectsPage/ProjectComponent2';
import img1 from '../ressources/homeServiceHome.png';
import img2 from '../ressources/homeServiceInscription.jpg';
import img3 from '../ressources/homeServiceConnexion.png';
import img4 from '../ressources/homeServicePostPrestation.png';
import img5 from '../ressources/homeServiceCurrentAnn.png';
import img6 from '../ressources/homeServiceContact.png';

export default function WebProject2(){
    return <>
        <Helmet>
            <meta name='description' content='page representant un projet web developpé avec node.js en groupe, rendue serveur heandelbars'/>
            <title>WebProject2 - Portfolio Belkacem</title>
        </Helmet>
        <ProjectComponent1 name='Home Service' description='Project developed in node.js for two types of customers, those who want to post a service, 
        and those who want to see the ads and take advantage of these services, the user can create, modify, delete a service and contact the customer.'/>
        <ProjectComponent2 img={img1} description='Home page'/>
        <ProjectComponent2 img={img2} description='To register, the user must enter all the information requested and choose between two types of account: provider account and customer account.'/>
        <ProjectComponent2 img={img3} description='To connect, the user must enter his username and password.'/>
        <ProjectComponent2 img={img4} description='To post a service, a small form to fill and enter the information of its service which wishes to publish.'/>
        <ProjectComponent2 img={img5} description='In this page, all the services and services available will be found here.'/>
        <ProjectComponent2 img={img6} description='Contact page'/>
    </>
}