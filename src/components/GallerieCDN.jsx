import styles from './GallerieCDN.module.css';

export default function GallerieCDN() {
    return <div className={styles.gallerie}>
        <div className={styles.PremiereDiv}>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg' alt= 'Node.js' />
            <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png' alt='python' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' alt= 'Git' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' alt= 'NPM' />
            <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-256.png' alt= 'Docker' />
            <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png' alt= 'React' />
            <img src="https://img.icons8.com/fluency/344/matlab.png" alt="matlab" />
        </div>  
    
        <div className={styles.DeuxiemeDiv}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png' alt= 'Next' />
            <img src="https://img.icons8.com/material-outlined/344/flutter.png" alt="React" />
            <img src='https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/android-256.png' alt= 'Android' />
            <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png' alt= 'Apple' />
            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968509.png' alt= 'JS' />
        </div >
        
        <div className={styles.TroisiemeDiv}>
            <img src='https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Java.png' alt= 'Java' />
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-256.png' alt= 'MySql' />
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png' alt= 'MangoDb' />
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/linux-256.png" alt="linux" />
        </div>
        
        <div className={styles.QuatreiemDiv}>
            <img src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png' alt= 'C++' />
            <img src='https://cdn-icons-png.flaticon.com/128/6132/6132221.png' alt= 'C#' />
        </div>
        <div className={styles.CimqiuemeDiv}>
            <img src='https://cdn1.iconfinder.com/data/icons/cloud-service-development/48/Cassandra-256.png' alt= 'Cassandra' />
        </div>
    </div>
  }
  