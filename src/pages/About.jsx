
import { Helmet } from "react-helmet-async";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from './About.module.css';
import CV from '../ressources/CV_BelkacemHeraoua.pdf';
import { BiDownload } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";


export default function About() {
    return <>
        <Helmet>
            <meta name='description' content='about me' />
            <title>About - Portfolio Belkacem</title>
        </Helmet>
        <div className={styles.about}>
            <h1 className={styles.h1}>À propos de <span className={styles.b}>Belkacem :</span></h1>
            <div className={styles.section2}>
                <a target="_blank" href='https://www.linkedin.com/in/belkacem-heraoua/' rel="noreferrer" className={styles.icon}>
                    <AiFillLinkedin />
                </a>
                <a target="_blank" href='https://github.com/BeckhamH' rel="noreferrer" className={styles.icon}>
                    <AiFillGithub />
                </a>
                <span className={styles.cv}>Télécharger mon curriculum vitae</span>
                <a href={CV} download="CV_BelkacemHeraoua.pdf" className={styles.container1}>
                    <span>CV</span>
                    <BiDownload className={styles.r} />
                </a>
            </div>
            <p className={styles.p}>
                Nouveau diplômé en programmation informatique de collège La Cité, je suis passionné par le développement d'applications web.
                Ma formation approfondie m'a permis de maîtriser les langages de programmation tels que HTML, CSS, JavaScript, Python, Java
                et C#. Bien que je n'ai pas encore d'expérience professionnelle, Ma détermination à apprendre et à me surpasser me pousse constamment à aller de l'avant.
                Je suis prêt à relever de nouveaux défis et à appliquer mes compétences dans des projets de développement web.
            </p>
            <p className={styles.p}>
                Contactez-moi pour discuter de vos besoins et explorer comment je peux contribuer à vos projets en tant que développeur
                d'applications web compétent et motivé.
            </p>
            <h2 className={styles.h2}>Compétences principales :</h2>
            <div className={styles.mainskills}>
                <div className={styles.mns1}>
                    <span>* Conception d'interfaces attrayantes avec HTML, CSS et JavaScript.</span>
                    <span>* Maîtrise des frameworks React et Next.js pour des expériences utilisateur dynamiques.</span>
                </div>
                <div className={styles.mns2}>
                    <span>* Création d'API RESTful pour la communication front-end et back-end.</span>
                    <span>* Expérience en langages back-end : Node.js, .NET, Java et C#.</span>
                </div>
                <div className={styles.mns3}>
                    <span>* Utilisation de bases de données MySQL et MongoDB pour stocker efficacement les données.</span>
                    <span>* Maîtrise des outils de développement: Visual Studio, Visual Studio Code, IntelliJ IDEA.</span>
                </div>
            </div>
            <h2 className={styles.h2}>Diplome & Exprerience</h2>
            <div className={styles.mainskills2}>
                <div className={styles.mns1}>
                    <span className={styles.title}>Diplôme d'études collégiales en Programmation Informatique :</span>
                    <span>College La Cité, Septembre 2020 - Mai 2022</span>
                </div>
                <div className={styles.mns2}>
                    <span className={styles.title}>Licence en Mathématiques Informatiques :</span>
                    <span>Université Abderrahmane Mira de Béjaia, Septembre 2018 - Janvier 2020</span>
                </div>
                <div className={styles.mns3}>
                    <span className={styles.title}>Baccalauréat en Sciences Expérimentales :</span>
                    <span>Lycée Chouhada Annani, Septembre 2015 - Juillet 2018</span>
                </div>
            </div>
            <h2 className={styles.h2}>Langues</h2>
            <div className={styles.mainskillsLang}>
                <div className={styles.mns1}>
                    <span>Français (avancé)</span>
                    <span>Anglais (intermédiaire)</span>
                </div>


            </div>

            <div className={styles.light}> <HiLightBulb className={styles.iconlight} /></div>
        </div>
    </>
}