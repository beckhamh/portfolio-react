import { useState, useEffect } from "react";
import GallerieCDN from "./GallerieCDN";
import styles from './MainHome.module.css';
import { BiDownload } from "react-icons/bi";
import CV from '../ressources/CV_BelkacemHeraoua.pdf';
import { NavLink } from "react-router-dom";


import TextTransition, { presets } from "react-text-transition";

export default function MainHome(){

    
    const dev = [
        "Web site",
        "Android application",
        "IOS application",
        "web application",
        "Desktop application"
    ];
    const tech = [
        "Node.js, Handlebars",
        "Java",
        "Swift",
        "React, Next.js",
        "C#, Java, .Net Framework"
    ];

    const App = () => {
        const [index, setIndex] = useState(0);
            useEffect(() => {
            const intervalId = setInterval(() =>
                setIndex(index => index + 1),
                3000 // every 3 seconds
            );
            return () => clearTimeout(intervalId);
            }, []);
      
        return (<>
        <div className={styles.box}>
            <span className={styles.txt1}>I develop</span>
            <TextTransition springConfig={presets.slow} >
                <div className={styles.txtTransition1}>
                    {dev[index % dev.length]}
                </div>
            </TextTransition>
            <span className={styles.txt2}>using</span>
            <TextTransition springConfig={presets.slow} >
                <div className={styles.txtTransition2}>
                    {tech[index % tech.length]}
                </div>
            </TextTransition> 
        </div> </> );
    };
    
    return <>
        <div className={styles.section1}>
            <div className={styles.section2}>
                <div className={styles.content}>
                    <div className={styles.slidbar}>
                        <div className={styles.circle}></div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.desciption}>
                        <h1 className={styles.bekam}>bekam<span className={styles.is}>.is()</span></h1>
                        <span className={styles.bh}>Belkacem Heraoua</span>
                        <span className={styles.fl}>Full Stack Developer</span>
                        {'}'}
                    </div>
                </div>
                
                <div className={styles.icons}>
                    {App(1)}
                </div> 
            </div>

            <div className={styles.skills}>
                <div className={styles.bottons}>
                    <a href={CV} download="CV_BelkacemHeraoua.pdf" className={styles.container1}>
                        <span>Resume</span>
                        <BiDownload className={styles.r}/>
                    </a>
                    <NavLink to='contact' className={styles.contact}> contact</NavLink>    
                </div>
                <GallerieCDN />
            </div>
        </div>
   </>
    
    

}