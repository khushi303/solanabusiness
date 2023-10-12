import './App.css';
import HEADER from './components/Header';
import ABOUT from './components/about';
import IMGSECTION from './components/imgsection';
import SUPPLIES from './components/supplies';
import ROADMAP from './components/roadmap';
import TEAM from './components/team';
import FAQ from './components/faq';
function App() {
  return (
    <div className='bg-col-red'>
      <HEADER />
      <ABOUT />
      <IMGSECTION />
      <SUPPLIES />
      <ROADMAP />
      <TEAM />
      <FAQ />
    </div>
  );
}

export default App;
