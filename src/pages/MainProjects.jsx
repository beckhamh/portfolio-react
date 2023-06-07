
import ProjectsCard from '../components/ProjectsCard';
import { Link } from 'react-router-dom';
import styles from './MainProjects.module.css';
import { Helmet } from 'react-helmet-async';
import img1 from '../ressources/cafehiyoto.jpg';
import img2 from '../ressources/homeservice.jpg';
import img3 from '../ressources/appleapp.jpg';

export default function MainProjects(){
    return<>
    <Helmet>
            <meta name="description" content="page contient les deffirents projets " />
            <title>Projects - Portfolio Belkacem</title>
        </Helmet>
    <section className={styles.section3}>
        <h1 className={styles.h1}>projets</h1>
        <div className={styles.cards}>
            <Link to="WebProject1" className={styles.card}>
                <ProjectsCard img={img1} name='café hiyoto'/>
            </Link>
            <Link to='WebProject2'className={styles.card}>
                <ProjectsCard  img={img2} name='home service' />
            </Link>
            <Link to="AppProject" className={styles.card}>
                <ProjectsCard  img={img3} name='à la bonne patate' />
            </Link>
        </div>
    </section>

    
    
    </>
}