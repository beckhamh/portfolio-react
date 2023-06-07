
import { useState, useEffect } from "react";
import GallerieCDN from "./GallerieCDN";
import styles from './MainHome.module.css';
import { BiDownload } from "react-icons/bi";
import CV from '../ressources/CV_BelkacemHeraoua.pdf';
import { NavLink } from "react-router-dom";



import TextTransition, { presets } from "react-text-transition";

export default function MainHome() {


    const dev = [
        "sites Web",
        "Applications android",
        "applications IOS",
        "Applications web",
        "Applications bureau"
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
                <span className={styles.txt1}>Je développe des</span>
                <TextTransition springConfig={presets.slow} >
                    <div className={styles.txtTransition1}>
                        {dev[index % dev.length]}
                    </div>
                </TextTransition>
                <span className={styles.txt2}>utilisant</span>
                <TextTransition springConfig={presets.slow} >
                    <div className={styles.txtTransition2}>
                        {tech[index % tech.length]}
                    </div>
                </TextTransition>
            </div> </>);
    };

    return <>
        <div className={styles.section1}>
            <div className={styles.section2}>
                <div className={styles.content}>
                    <div className={styles.desciption}>
                        <div className={styles.bonjour}>
                            <p> Bonjour!</p>
                            <span className={styles.emoji}>👋</span>
                        </div>
                        <span className={styles.bh}>Je suis Belkacem Heraoua</span>
                        <span className={styles.fl}>Développeur Full Stack</span>
                    </div>
                </div>

                <div className={styles.icons}>
                    {App(1)}
                </div>
            </div>

            <div className={styles.skills}>
                <div className={styles.bottons}>
                    <a href={CV} download="CV_BelkacemHeraoua.pdf" className={styles.container1}>
                        <span>CV</span>
                        <BiDownload className={styles.r} />
                    </a>
                    <NavLink to='contact' className={styles.contact}> contact</NavLink>
                </div>
                <GallerieCDN />
            </div>
        </div>
    </>



}