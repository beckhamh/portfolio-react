import { Helmet } from 'react-helmet-async';

import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import ProjectComponent2 from '../components/ProjectsPage/ProjectComponent2';

import bonnePatateHome from '../ressources/bonnePatateHome.png';
import bonnePatateMenu from '../ressources/bonnePatateMenu.png';
import bonnePatateFacture from '../ressources/bonnePatateFacture.png';
import bonnePatateMap from '../ressources/bonnePatateMap.png';
import bonnePatateHistorique from '../ressources/bonnePatateHistorique.png';

export default function AppleAppProject(){
    return <>

        <Helmet>
            <meta name='description' content='page representant une application developpé par moi meme en swift'/>
            <title>AppProject - Portfolio Belkacem</title>
        </Helmet>
        <ProjectComponent1 name='à la bonne patate' description='Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders.'/>
        <ProjectComponent2 img={bonnePatateHome} description='Home page'/>
        <ProjectComponent2 img={bonnePatateMenu} description='Menu items'/>
        <ProjectComponent2 img={bonnePatateFacture} description='Order summary'/>
        <ProjectComponent2 img={bonnePatateMap} description='Delivery address.'/>
        <ProjectComponent2 img={bonnePatateHistorique} description='Order history.'/>
    </>
}