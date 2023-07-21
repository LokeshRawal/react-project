import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from "../layout/home.page";
import InitialPage1 from "../layout/initial1.page";
import JobSectors from "../home/jobsector-page";
import DocumentationPage from "../home/documentation-page";
import GallaryPage from "../home/gallery-page";
import ContactPage from "../home/contact-page";

const Routing = () => {

    return (<>
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<InitialPage1 />}/>
             <Route path="/home" element={<InitialPage1 />}/>
             <Route path="/job-sectors" element={<JobSectors />}/>
             <Route path="/documentation" element={<DocumentationPage />}/>  
             <Route path="/gallary" element={<GallaryPage />}/>  
             <Route path="/contact" element={<ContactPage/>}/>  

             <Route path="*" element={<> 404 NOT FOUND</>}/>

            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;