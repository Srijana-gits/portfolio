import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Project,
  Contact,
  Navigation,
  Footer,
  Education,
  Leadership,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <div className="timeline-section" id="history">
                <h2 className="section-heading">Experience</h2>
                <Timeline/>
            </div>
            <Education/>
            <Project/>
            <Leadership/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
