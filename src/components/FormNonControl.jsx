
import styles from './FormNonControl.module.css';
import { FiMail } from "react-icons/fi";
import { MdPlace } from "react-icons/md";
import { IconContext } from "react-icons";
import emailjs from '@emailjs/browser';

import { useRef } from 'react';
import { useState } from 'react';

export default function FormNonControl(){
    const form = useRef();
    const nameRef= useRef(null);
    const emailRef= useRef(null);
    const subjectRef= useRef(null);
    const messageRef= useRef(null); 
    // fonction qui vas s'executer a l'envoie du formulaire 
    const handleSubmit = (event) => {
        // tous les donnes sont dans le event, pour empecher le comportement par default on utilise la fonction preventDefault() 
        // pour forcer la page a se refraichir on utulise    window.location.reload(true)
        //empecher le rafraichement de la page
        event.preventDefault();
        validateName();
        validateEmail();
        validateSubj();
        validateMssg();
        // on vas checker d'abord si les element(les composant) sont la, ensuite on check la validite puis on fais la soumission
        if(nameRef && emailRef && subjectRef && messageRef &&
            event.currentTarget.checkValidity()){

            // code du soumission du formulaire
            //obtenir la valeur du champ name et l'afficher dans la console
            //console.log(nameRef.current.value);

            emailjs.sendForm('service_pk0bmv9', 'template_1iq06yk', form.current, '79NmTfR_3ujaAI4rY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        }
    }


    // tester la validite du champ name
    const [mssgErrName, setMssgErrName]= useState('');
    const validateName = () => {
        // si c'est valid
        if(nameRef.current.validity.valid){
            setMssgErrName('');
        }
        else {
            if(nameRef.current.validity.valueMissing){
                setMssgErrName('your name is missing !');
            }
        }
    }

    // tester la validite du champ email
    const [mssgErrEmail, setMssgErrEmail] = useState('');
    const validateEmail = () =>{
        if(emailRef.current.validity.valid){
            setMssgErrEmail('');
        }
        else{
            if(emailRef.current.validity.valueMissing){
                setMssgErrEmail('your email is missing !');
            }
            else if(emailRef.current.validity.typeMismatch){
                setMssgErrEmail('please enter a valid email.');
            }
        }
    }

    // tester la validite du champ subject
    const [mssgErrSubj, setMssgErrSubj]= useState('');
    const validateSubj = () => {
        // si c'est valid
        if(subjectRef.current.validity.valid){
            setMssgErrSubj('');
        }
        else {
            if(subjectRef.current.validity.valueMissing){
                setMssgErrSubj('the subject is missing !');
            }
        }
    }

    // tester la validite du champ message
    const [mssgErrMssg, setMssgErrMssg]= useState('');
    const validateMssg = () => {
        // si c'est valid
        if(messageRef.current.validity.valid){
            setMssgErrMssg('');
        }
        else {
            if(messageRef.current.validity.valueMissing){
                setMssgErrMssg('the message is missing !');
            }
        }
    }

    return <>
    <form className={styles.form} ref={form} onSubmit={handleSubmit} noValidate>
        <p className={styles.p}>
            Are you interested in hiring me for your projects or just want to say Hi? 
            you can fill out this form and I'll be happy to respond.
        </p>
        <input type="text" name='user_name' placeholder='Name' required maxLength={35} ref={nameRef} onBlur={validateName}/>
        {mssgErrName !== '' && 
            <div className={styles.erreur}>{mssgErrName}</div>
        }
        <input type="email" name='user_email'placeholder='Email' required ref={emailRef} onBlur={validateEmail}/>
        {mssgErrEmail !== '' && 
            <div className={styles.erreur}>{mssgErrEmail}</div>
        }
        <input type="text" name='subject'placeholder='Subject' required ref={subjectRef} onBlur={validateSubj}/>
        {mssgErrSubj !== '' && 
            <div className={styles.erreur}>{mssgErrSubj}</div>
        }
        <textarea rows={8} name='message' placeholder='Message' required ref={messageRef} onBlur={validateMssg}></textarea>
        {mssgErrMssg !== '' && 
            <div className={styles.erreur}>{mssgErrMssg}</div>
        }

        <div className={styles.line}></div>
        <input type="submit" value={'send now'} className={styles.btn}/>
        <div className={styles.infos}>
            <IconContext.Provider value={{size:'28px', color:'#1481BA'}}>
                <FiMail />
            </IconContext.Provider>
            <p className={styles.p2}>belkacem.heraoua06@gmail.com</p>
        </div>
        <div className={styles.infos}>
            <IconContext.Provider value={{size:'28px', color:'#1481BA'}}>
                <MdPlace />
            </IconContext.Provider>
            <p className={styles.p2}>Ottawa, Ontario, Canada</p>
        </div>
        
    </form>
    </> 
    
    
}