import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import TechStack from './pages/TechStack/TechStack';
import Project from './pages/Project/Project';
import Education from './pages/Education/Education';
import WorkExperiance from './pages/WordExp/WorkExperiance';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    < >
   <Layout/>
   <div className='container'>
   <About/>
   <WorkExperiance/>
   <TechStack/>
<Education/>
<Project/>
<Contact/>
   </div>
   <div className='footer mt-6'>
   <h4 className='text-center mt-5 mb-2 '>
    Developed And Maintain By Kishan Upadhyay &copy;2024
   </h4>
   </div>
   <ScrollToTop smooth color='#f29f67' style={{backgroundColor:"#1e1e2c", borderRadius:"80px"}} />
    </>
  );
}

export default App;
