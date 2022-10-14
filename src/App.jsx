
import { StrictMode } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import { lazy } from "react";

import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter } from "react-router-dom";


// quand tu auras besion de cet pages, tu vas faire l'importation et la charger. import dynamique
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy((()=>import("./pages/MainProjects")));
const Contact = lazy(() => import("./pages/Contact"));
const WebProject1 = lazy(() => import("./pages/WebProject1"));
const WebProject2 = lazy(() => import("./pages/WebProject2"));
const AppleAppProject = lazy(() => import("./pages/AppleAppProject"));
const About = lazy(() => import ("./pages/About"));

export default function App() {
  return <>
    <StrictMode>
      {/*mon application utilise du routage client, attention il va y avoir plusieur routes */}
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/AppProject" element={<AppleAppProject />} />
              <Route path="projects/webProject1" element={<WebProject1 />} />
              <Route path="projects/webProject2" element={<WebProject2 />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  </>
  
}

