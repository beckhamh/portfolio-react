import { Helmet } from 'react-helmet-async';

import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import Gallerie from '../components/Gallerie';

import bonnePatateHome from '../ressources/bonnePatateHome.png';
import bonnePatateMenu from '../ressources/bonnePatateMenu.png';
import bonnePatateFacture from '../ressources/bonnePatateFacture.png';
import bonnePatateMap from '../ressources/bonnePatateMap.png';
import bonnePatateHistorique from '../ressources/bonnePatateHistorique.png';
import bonnePatateEnvoie from '../ressources/bonnePatateEnvoie.png';



export default function AppleAppProject(){
    let imgs = [{ src: bonnePatateHome},{ src: bonnePatateMenu},{ src: bonnePatateFacture},{ src: bonnePatateMap},{ src: bonnePatateHistorique },{ src: bonnePatateEnvoie}];
    return <>

        <Helmet>
            <meta name='description' content='page representant une application developpé par moi meme en swift'/>
            <title>AppProject - Portfolio Belkacem</title>
        </Helmet>
        <ProjectComponent1 name='À la bonne patate' description="Application permettant de gérer les commandes dans un restaurant en affichant le menu, le récapitulatif des commandes, une carte pour la livraison et l'historique des commandes. Le site est développé en utilisant Node.js avec une interface utilisateur fluide et réactive."
        p3='ios application' p4='Language: SwiftUi' p5='Stockage: CoreData'/>
        <Gallerie imgs={imgs} />
        
    </>
}