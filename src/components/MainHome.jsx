import {Link} from "react-router-dom";

import styles from './MainHome.module.css';
import avatar from '../ressources/avatar.jpg';
import Skills from './Skills';
import CV from '../ressources/CV_BelkacemHeraoua.pdf';

import { IconContext } from "react-icons";
import { AiOutlineHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { SiJavascript, SiCsharp, SiMicrosoftsqlserver, SiDotnet } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiMailSend, BiDownload } from "react-icons/bi";

export default function MainHome(){
    return <>
    <section className={styles.section1}>
        <div className={styles.cercle}>
            <div className={styles.cercle1}>
                <div className={styles.cercle2}>
                    <img src={avatar} alt="avatar" className={styles.avatar}/>
                </div>
            </div>
        </div>
        <div className={styles.txt}>
            <div className={styles.p121}>
                <p className={styles.p1}>hello, i'm</p>
                <p className={styles.p2}> belkacem heraoua</p>
                <p className={styles.p1}>full stack developer</p>
            </div>
            
            <p className={styles.p3}> 
                I'm new graduate in computer programming at La Cite, during  my  time in college I have developed
                several skills, in various programming languages, I am  motivated  and  i like  everything
                about web development ( Front and Back End ), i  would like  to work in  a dynamic team to  
                practice my skills in this field (html, css, js, Node.js, React.js) as well as in Java, C#, Sql.
                some projects are done by myself and in a team during my college career, you will find
                them in the projects section.
            </p>
            {/*<p className={styles.git}>Discover them also on Github!</p>*/}
            
        </div>
    </section>

    <div className={styles.skills}>
        <IconContext.Provider value={{ color: '#E54C21'}}>
            <Skills nom='html'>
                <AiOutlineHtml5 />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#304CDC'}}>
            <Skills nom='css'>
                <ImCss3 />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#F7DF1E'}}>
            <Skills nom='Java Script'>
                <SiJavascript />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#5a24b0'}}>
            <Skills nom='C#'>
                <SiCsharp />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'ed4806'}}>
            <Skills nom='Java'>
                <DiJava />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'red'}}>
            <Skills nom='Sql Server'>
                <SiMicrosoftsqlserver />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#8CC64D'}}>
            <Skills nom='Node.js'>
                <FaNodeJs />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#48cffc'}}>
            <Skills nom='React'>
                <FaReact />
            </Skills>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'purple'}}>
            <Skills nom='Framework'>
                <SiDotnet />
            </Skills>
        </IconContext.Provider>
        <div className={styles.container}>
            <Link to='contact' className={styles.container1}>
                <span>Send Email</span>
                <BiMailSend className={styles.icon}/>
            </Link>
            <a href={CV} download="CV_BelkacemHeraoua.pdf" className={styles.container1}>
                <span>Download Cv</span>
                <BiDownload className={styles.icon}/>
            </a>    
        </div>
        
    </div>
    

        
    
    
    
</>}
