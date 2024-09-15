
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Section from './Components/Section/Section';
import SectionColumn from './Components/SectionColumn/SectionColumn';
import SmallRectangle from './Components/SmallRectangle/SmallRectangle';
import Smallcard from './Components/Smallcard/Smallcard';
import RectangleIcons from './Components/RectangleIcons/RectangleIcons';
import Rectanglestatistics from './Components/RectangleStatistics/RectangleStatistics';
import RectangleWorkTogether from './Components/RectangleWorkTogether/RectangleWorkTogether';
import SmallcardIcons from './Components/SmallCardIcons/SmallCardIcons';
import About from './routes/About';
import Works from './routes/Works';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Section>
                <ProfileCard firstP='A WEB DESIGNER' title='NELSON FERNANDES.' secondP='I am a Web Designer based in san francisco.'/>
                <SectionColumn>
                  <SmallRectangle />
                  <Section>
                    <Smallcard title='MORE ABOUT ME' subtitle='Credentials' />
                    <Smallcard title='SHOWCASE' subtitle='Project' />
                  </Section>
                </SectionColumn>
              </Section>

              <Section>
                <Smallcard title='BLOG' subtitle='GFonts' />
                <RectangleIcons title='SPECIALIZATION' subtitle='Services Offering' />
                <SmallcardIcons title='STAY WITH ME' subtitle='Profiles' />
              </Section>

              <Section>
                <Rectanglestatistics 
                  title='07' 
                  subtitle='YEARS EXPERIENCE' 
                  secondTitle='+125' 
                  secondSubtitle='CLIENTS WORLDWIDE' 
                  thirdTitle='+210' 
                  thirdSubtitle='TOTAL PROJECTS' 
                />
                <RectangleWorkTogether />
              </Section>
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
