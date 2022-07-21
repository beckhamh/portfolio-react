
import { Helmet } from "react-helmet-async";
import MainHome from "../components/MainHome";


export default function Home(){
    return <main>
        <Helmet>
            <meta name="description" content="page home " />
            <title>Home - Portfolio Belkacem</title>
        </Helmet>
        <MainHome />
        
    </main>
}