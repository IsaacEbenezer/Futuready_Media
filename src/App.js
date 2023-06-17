import './App.css';
import MediaHeader from './components/MediaHeader';
import AboutMedia from './components/AboutMedia';
import Modus from './components/Modus';
import Terms from './components/Terms';
import Footer from './components/Footer';
import TimelinesAndDetails from './components/TimeLinesAndDetails';

function App() {
  return (
    <div className="App">
      <MediaHeader/>
      <AboutMedia/>
      <Modus/>
      <TimelinesAndDetails/>
      <Terms/>
      <Footer/>
    </div>
  );
}

export default App;
