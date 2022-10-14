
import { Helmet } from "react-helmet-async";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from './About.module.css';
import CV from '../ressources/CV_BelkacemHeraoua.pdf';
import { BiDownload } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";


export default function About(){
    return<>
        <Helmet>
            <meta name='description' content='about me'/>
            <title>About - Portfolio Belkacem</title>
        </Helmet>
        <div className={styles.about}>
            <h1 className={styles.h1}>about <span className={styles.b}>Belkacem</span></h1>
            <div className={styles.section2}>
                <a target="_blank" href='https://www.linkedin.com/in/belkacem-heraoua/' rel="noreferrer" className={styles.icon}>
                    <AiFillLinkedin />  
                </a>
                <a target="_blank" href='https://github.com/BeckhamH' rel="noreferrer" className={styles.icon}>
                    <AiFillGithub />
                </a>
                <span className={styles.cv}>Download my</span>
                <a href={CV} download="CV_BelkacemHeraoua.pdf" className={styles.container1}>
                    <span>Resume</span>
                    <BiDownload className={styles.r}/>
                </a>
            </div>
            <p className={styles.p}>
                Hi there, i'm Belkacem Heraoua, i'm a new graduade from college La Cite, Ottawa, (Ontario) in computer programming.
                A front and Back end developer, passionate about creating interactive application and experience on the web developement
                (React, Next, Node.js, html, css, java script, Csharp, java, MySql & Sql Server).
            </p>
            <h2 className={styles.h2}>Main skills</h2>
            <div className={styles.mainskills}>
                <div className={styles.mns1}>
                    <span>Front-end UX/UI</span>
                    <span>Back-end</span>
                </div>
                <div className={styles.mns2}>
                    <span>JavaScript, CSS, HTML, React, Node.js, .NetFramework, mySql, java, next.js</span>
                </div>
                <div className={styles.mns3}>
                    <span>IT Technician</span>
                </div>
            </div>
            <h2 className={styles.h2}>Diplome & Exprerience</h2>
            <div className={styles.mainskills}>
                <div className={styles.mns1}>
                    <span> Dec in computer programming</span>
                    <span>- 2 years</span>
                </div>
                <div className={styles.mns2}>
                    <span>bachelor's degree in experimental science</span>
                </div>
                <div className={styles.mns3}>
                    <span>Bachelor in Computational Mathematics</span>
                </div>
            </div>
            <h2 className={styles.h2}>Languages</h2>
            <div className={styles.mainskillsLang}>
                <div className={styles.mns1}>
                    <span> French</span>
                </div>
                <div className={styles.mns2}>
                    <span>Anglais</span>
                </div>
                
            </div>

            <div className={styles.light}> Made with <HiLightBulb className={styles.iconlight}/> in 2022</div>
        </div>
    </>
}