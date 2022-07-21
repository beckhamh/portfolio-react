
import { Helmet } from 'react-helmet-async';

import ProjectComponent1 from '../components/ProjectsPage/ProjectComponent1';
import ProjectComponent2 from '../components/ProjectsPage/ProjectComponent2';
import commandes from '../ressources/commandes.jpg';
import connexion from '../ressources/connexion.jpg';
import inscription from '../ressources/inscription.jpg';
import menu from '../ressources/menu.jpg';
import panier from '../ressources/panier.png';

export default function WebProject1() {
    return <>
        <Helmet>
            <meta name='description' content='page representant un projet web developpé avec node.js, rendue serveur heandelbars' />
            <title>WebProject1 - Portfolio Belkacem</title>
        </Helmet>
        <ProjectComponent1 name='Café hiyoto' description='Web site developed in Node.js during my school career, users can create an account and then 
        be able to select items (add, delete, modify) and put them in the shopping cart and submit his order.F'/>
        <ProjectComponent2 img={inscription} description='Registration page: a valid email and a password to be able to register and create an account' />
        <ProjectComponent2 img={connexion} description='Users who have an account can log in easily using their email address and password' />
        <ProjectComponent2 img={menu} description='Select an item by clicking on the add to cart button, this will automatically put the selected product in your cart' />
        <ProjectComponent2 img={panier} description='All the selected products will be found here in the basket, to delete an item you just have to click on (x), to validate the order you have to click on the submit button' />
        <ProjectComponent2 img={commandes} description='The order page is not accessible to everyone, only the administrator who has access to see the orders that are submitted and to be able to change the status of each' />
    </>
}