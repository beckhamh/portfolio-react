import { Helmet } from 'react-helmet-async';
import FormNonControl from '../components/FormNonControl';

export default function Contact(){
    return <>
        <Helmet>
            <meta name="description" content="page de contact " />
            <title>Contact - Portfolio Belkacem</title>
        </Helmet>
        <FormNonControl/>
    </>
}